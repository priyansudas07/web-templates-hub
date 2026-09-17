import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RotateCw, Shield } from 'lucide-react';

interface Jersey3DViewerProps {
  modelUrl?: string;
  altText?: string;
  className?: string;
  showControls?: boolean;
}

export const Jersey3DViewer: React.FC<Jersey3DViewerProps> = ({
  modelUrl = '/jersey.glb',
  className = '',
  showControls = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0B0B0A');

    // Camera setup
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 2.5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    container.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.5;
    controls.maxPolarAngle = Math.PI / 2 + 0.1;
    controlsRef.current = controls;

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.position.set(3, 4, 3);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xE3261E, 1.0); // Crimson rim light
    dirLight2.position.set(-3, 2, -3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffffff, 1.0);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    // Load GLTF Model & Isolate Single Jersey
    const loader = new GLTFLoader();

    loader.load(
      modelUrl,
      (gltf) => {
        const fullScene = gltf.scene;

        // Traverse all meshes and filter geometry indices to keep ONLY triangles with X <= 0 (isolates 1 single jersey)
        fullScene.traverse((child) => {
          const mesh = child as THREE.Mesh;
          if (mesh.isMesh && mesh.geometry) {
            const geometry = mesh.geometry;
            const posAttr = geometry.attributes.position;
            const indexAttr = geometry.index;

            if (posAttr && indexAttr) {
              const indices = indexAttr.array;
              const newIndices: number[] = [];

              for (let i = 0; i < indices.length; i += 3) {
                const a = indices[i];
                const b = indices[i + 1];
                const c = indices[i + 2];

                const xA = posAttr.getX(a);
                const xB = posAttr.getX(b);
                const xC = posAttr.getX(c);

                // Keep triangle if all 3 vertices are on left side (X <= 0)
                if (xA <= 0 && xB <= 0 && xC <= 0) {
                  newIndices.push(a, b, c);
                }
              }

              geometry.setIndex(newIndices);
              geometry.computeBoundingBox();
              geometry.computeBoundingSphere();
            }
          }
        });

        // Calculate bounding box of filtered single jersey
        const box = new THREE.Box3().setFromObject(fullScene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Shift fullScene inside group so its geometric center is at (0, 0, 0)
        fullScene.position.set(-center.x, -center.y, -center.z);

        const singleJerseyGroup = new THREE.Group();
        singleJerseyGroup.add(fullScene);

        // Scale to fit viewport perfectly in the exact middle
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const scale = 1.55 / maxDim;
          singleJerseyGroup.scale.set(scale, scale, scale);
        }

        scene.add(singleJerseyGroup);

        if (controlsRef.current) {
          controlsRef.current.target.set(0, 0, 0);
          controlsRef.current.update();
        }
      },
      undefined,
      (err) => console.error('GLTF Load Error:', err)
    );

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      renderer.render(scene, camera);
    };
    animate();

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [modelUrl]);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = isAutoRotating;
    }
  }, [isAutoRotating]);

  return (
    <div className={`relative w-full h-full bg-[#0B0B0A] rounded-sm overflow-hidden border border-[#292927] group ${className}`}>
      
      {/* Top Status Header */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0B0B0A]/90 backdrop-blur-md border border-[#292927] text-[10px] font-mono font-bold text-[#E3261E] tracking-widest uppercase rounded-sm shadow-md">
          <Shield className="w-3 h-3 text-[#E3261E]" />
          <span>3D SINGLE KIT VAULT</span>
        </div>

        <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 bg-[#0B0B0A]/90 backdrop-blur-md border border-[#292927] text-[10px] font-mono text-[#9B9992] uppercase rounded-sm">
          <span>DRAG TO ROTATE 360°</span>
        </div>
      </div>

      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="w-full h-full min-h-[380px] bg-[#0B0B0A]" />

      {/* Bottom Interactive Controls */}
      {showControls && (
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs font-mono">
          <button
            type="button"
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border backdrop-blur-md transition-all ${
              isAutoRotating
                ? 'bg-[#E3261E]/20 border-[#E3261E] text-[#F3F0E8]'
                : 'bg-[#151514]/90 border-[#292927] text-[#9B9992] hover:text-[#F3F0E8]'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? 'animate-spin' : ''}`} />
            <span>{isAutoRotating ? 'AUTO-ROTATE ON' : 'PAUSED'}</span>
          </button>

          <span className="text-[10px] text-[#9B9992] bg-[#0B0B0A]/90 border border-[#292927] px-2 py-1 rounded-sm">
            SCROLL TO ZOOM
          </span>
        </div>
      )}
    </div>
  );
};
