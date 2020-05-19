import React, { useRef } from 'react';

import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import RollableDice from './RollableDice';
import { act } from 'react-dom/test-utils';

it('should be able to roll', () => {
  const onPoints = jest.fn().mockImplementation((e) => {
    expect(e).toBeGreaterThan(0);
    expect(e).toBeLessThan(7);
  });

  const { result } = renderHook(() => {
    const ref = useRef();
    render(<RollableDice onPoints={onPoints} ref={ref} />);
    return ref;
  });

  const refContainer = result.current;
  expect(refContainer.current.roll).toBeDefined();

  act(() => {
    // for (let i = 0; i < 100; i++) {
    refContainer.current.roll();
    // }
  });

  // expect(onPoints).toBeCalledTimes(1);
});

it('should call onPoints with 0 on reset', () => {
  const onPoints = jest.fn().mockImplementation((e) => {
    expect(e).toBe(0);
  });

  const { result } = renderHook(() => {
    const ref = useRef();
    render(<RollableDice onPoints={onPoints} ref={ref} />);
    return ref;
  });

  const refContainer = result.current;
  expect(refContainer.current.roll).toBeDefined();

  act(() => {
    refContainer.current.reset();
  });

  expect(onPoints).toBeCalledTimes(1);
});
