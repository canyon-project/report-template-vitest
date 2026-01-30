import { describe, expect, it } from 'vitest';
import { min } from './min.js';

describe('Min function', () => {
  it('returns 3 when comparing 5 and 3', () => {
    expect(min(5, 3)).toBe(3);
  });

  it('returns 7 when comparing 7 and 10', () => {
    expect(min(7, 10)).toBe(7);
  });

  it('returns 5 when comparing 5 and 5', () => {
    expect(min(5, 5)).toBe(5);
  });

  it('returns -5 when comparing -5 and -2', () => {
    expect(min(-5, -2)).toBe(-5);
  });
});
