import { describe, expect, it } from 'vitest';
import { divide } from './divide.js';

describe('Divide function', () => {
  it('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('divides 15 / 3 to equal 5', () => {
    expect(divide(15, 3)).toBe(5);
  });

  it('divides 7 / 2 to equal 3.5', () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  it('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });
});
