import React, { useCallback, useState } from "react";

interface Props {
  onClick: () => void;
}
export const Child = React.memo(({ onClick }: Props) => {
  console.log("render hijo");
  return <button onClick={onClick}>Click hijo</button>;
});

export default function AvoidReRenders() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <p>Other: {other}</p>
      <Child onClick={handleClick} />
      <button onClick={() => setOther((prev) => prev + 1)}>
        Cambiar Other
      </button>
    </>
  );
}
