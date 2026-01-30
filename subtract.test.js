import { describe, expect, it } from 'vitest';
import { subtract } from './subtract.js';

describe('Subtract function', () => {
  it('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('subtracts 10 - 7 to equal 3', () => {
    expect(subtract(10, 7)).toBe(3);
  });

  it('subtracts 0 - 5 to equal -5', () => {
    expect(subtract(0, 5)).toBe(-5);
  });
});
