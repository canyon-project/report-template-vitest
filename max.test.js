import { describe, expect, it } from 'vitest';
import { max } from './max.js';

describe('Max function', () => {
  it('returns 5 when comparing 5 and 3', () => {
    expect(max(5, 3)).toBe(5);
  });

  it('returns 10 when comparing 7 and 10', () => {
    expect(max(7, 10)).toBe(10);
  });

  it('returns 5 when comparing 5 and 5', () => {
    expect(max(5, 5)).toBe(5);
  });

  it('returns -2 when comparing -5 and -2', () => {
    expect(max(-5, -2)).toBe(-2);
  });
});
