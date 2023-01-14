import React, { useState, useEffect } from "react";
import "./itemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="counter">
      <button disabled={count <= 0} onClick={decrease} className="buttonCount">
        -
      </button>
      <span>{count}</span>
      <button
        disabled={count >= stock}
        onClick={increase}
        className="buttonCount"
      >
        +
      </button>
      <div>
        <button
          onClick={() => onAdd(count)}
          disabled={count <= 0}
          className="addToCartButton"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
