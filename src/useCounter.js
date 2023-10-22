import React, { useState } from "react";

// This is a custom hook Counter that returns stateful logic to manage a counter.
export default function Counter(initialValue = 0) {
  // 'count' is the current value of the counter.
  const [count, setCount] = useState(initialValue);
  // 'Increment' increases the counter value.
  const Increment = () => {
    setCount((count) => count + 1);
  };
  // 'Decrement' decreases the counter value, but it doesn't go below zero.
  const Decrement = () => {
    if (count <= 0) {
      return false;
    }
    setCount((count) => count - 1);
  };
  // 'Reset' resets the counter to the initial value.
  const Reset = () => {
    setCount(initialValue);
  };
  // 'SetValue' allows you to set the counter to a specific value.
  const SetValue = (value) => {
    setCount(value);
  };
  return [count, Increment, Decrement, Reset, SetValue];
}
