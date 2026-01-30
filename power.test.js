import { describe, expect, it } from 'vitest';
import { power } from './power.js';

describe('Power function', () => {
  it('calculates 2^3 to equal 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  it('calculates 5^2 to equal 25', () => {
    expect(power(5, 2)).toBe(25);
  });

  it('calculates 10^0 to equal 1', () => {
    expect(power(10, 0)).toBe(1);
  });

  it('calculates 2^-2 to equal 0.25', () => {
    expect(power(2, -2)).toBe(0.25);
  });
});
