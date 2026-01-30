import { describe, expect, it } from 'vitest';
import { abs } from './abs.js';

describe('Abs function', () => {
  it('returns 5 for absolute value of 5', () => {
    expect(abs(5)).toBe(5);
  });

  it('returns 5 for absolute value of -5', () => {
    expect(abs(-5)).toBe(5);
  });

  it('returns 0 for absolute value of 0', () => {
    expect(abs(0)).toBe(0);
  });

  it('returns 3.14 for absolute value of -3.14', () => {
    expect(abs(-3.14)).toBe(3.14);
  });
});
