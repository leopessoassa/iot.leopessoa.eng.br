// Feature: react-site-conversion, Property 4: Sticky header ativa após 100px de scroll
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import * as fc from 'fast-check';
import { useStickyHeader } from './useStickyHeader';

describe('useStickyHeader', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  it('Property 4: returns true for any scrollY > 100', () => {
    fc.assert(
      fc.property(fc.integer({ min: 101, max: 10000 }), (scrollY) => {
        const { result } = renderHook(() => useStickyHeader());
        act(() => {
          Object.defineProperty(window, 'scrollY', {
            value: scrollY,
            writable: true,
            configurable: true,
          });
          window.dispatchEvent(new Event('scroll'));
        });
        expect(result.current).toBe(true);
      }),
      { numRuns: 100 }
    );
  });

  it('Property 4: returns false for any scrollY <= 100', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 100 }), (scrollY) => {
        const { result } = renderHook(() => useStickyHeader());
        act(() => {
          Object.defineProperty(window, 'scrollY', {
            value: scrollY,
            writable: true,
            configurable: true,
          });
          window.dispatchEvent(new Event('scroll'));
        });
        expect(result.current).toBe(false);
      }),
      { numRuns: 100 }
    );
  });
});
