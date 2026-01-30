import { describe, expect, it } from 'vitest';
import { factorial } from './factorial.js';

describe('Factorial function', () => {
  it('calculates factorial of 0 to equal 1', () => {
    expect(factorial(0)).toBe(1);
  });

  it('calculates factorial of 1 to equal 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('calculates factorial of 5 to equal 120', () => {
    expect(factorial(5)).toBe(120);
  });

  it('calculates factorial of 3 to equal 6', () => {
    expect(factorial(3)).toBe(6);
  });

  it('throws error for negative numbers', () => {
    expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
  });
});
