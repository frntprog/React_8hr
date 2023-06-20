import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { counter, increase, decrease, reset } = useCounter(0);
  return (
    <div>
      <h1>Counter:</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
