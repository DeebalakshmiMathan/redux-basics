import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const addValue = Number(value) || 0;
  const handelChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section>
      <h1>Counter app</h1>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setValue(0);
            dispatch(reset());
          }}
        >
          reset
        </button>
      </div>
      <input value={value} onChange={handelChange} />{" "}
      <button
        onClick={() => {
          dispatch(incrementByAmount(addValue   ));
        }}
      >
        IncrementByAmount
      </button>
    </section>
  );
};

export default Counter;
