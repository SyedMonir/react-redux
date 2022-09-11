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

// 1. state - count : 0
// 2. actions increment, decrement, reset
// 3. reducers increment count ⇒count + 1
// decrement → count ⇒ count - 1
// reset → count 0
// 4. store
// 5. providing store in react
// 6. use store
