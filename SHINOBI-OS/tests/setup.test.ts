// Starter test suite for SHINOBI OS
// Can be executed with Vitest or Jest test runner

export function calculateWindowBounds(viewportWidth: number, viewportHeight: number) {
  return {
    maxWidth: Math.max(viewportWidth - 20, 320),
    maxHeight: Math.max(viewportHeight - 60, 240),
  };
}

describe('SHINOBI OS Windowing Logic', () => {
  it('calculates proper default viewport bounds', () => {
    const bounds = calculateWindowBounds(1920, 1080);
    expect(bounds.maxWidth).toBe(1900);
    expect(bounds.maxHeight).toBe(1020);
  });
});
