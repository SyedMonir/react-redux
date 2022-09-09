import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementCounter,
  incrementCounter,
  reset,
} from '../services/actions/counterAction';

const Counter = () => {
  const count = useSelector((state) => state.count);
  // console.log(count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>0</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
};

export default Counter;
