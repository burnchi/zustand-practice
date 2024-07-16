"use client";
import React from "react";
import useCounter from "./hook/useCounter";

const Counter = () => {
  const { CounterCount, CounterDecrement, CounterIncrement } = useCounter();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        gap: "4px",
      }}
    >
      <button
        onClick={() => CounterIncrement()}
        style={{
          width: "40px",
          height: "40px",
        }}
      >
        +1
      </button>
      <button
        onClick={() => CounterDecrement()}
        style={{
          width: "40px",
          height: "40px",
        }}
      >
        -1
      </button>
      <span>{CounterCount}</span>
    </div>
  );
};

export default Counter;
