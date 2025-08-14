//@ts-nocheck

import React, { useReducer } from "react";

export default function CounterUseReducer() {
  function reducer(state, action) {
    if (action.type === "incremented_count") {
      return {
        count: state.count + 1,
      };
    }

     if (action.type === "decremented_count") {
      return {
        count: state.count > 0 ? state.count - 1 : 0,
      };
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_count" });
        }}
      >
        Incrementar count
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decremented_count" });
        }}
      >
        Decrementar count
      </button>
      <p>Count: {state.count}.</p>
    </>
  );
}
