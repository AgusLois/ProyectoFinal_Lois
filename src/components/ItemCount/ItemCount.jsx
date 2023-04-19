import { useState } from "react";
import { Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";

export const ItemCount = () => {
  const [counter, setCounter] = useState(0);
  const addUp = () => {
    setCounter(counter + 1);
  };
  const subtract = () => {
    setCounter(counter > 0 ? counter - 1 : counter);
  };
  const restart = () => {
    setCounter(0);
  };
  return (
    <div className="d-flex">
      <Button onClick={subtract} variant="light">
        <GrFormSubtract />
      </Button>
      <h3>{counter}</h3>
      <Button onClick={addUp} variant="light">
        <AiOutlinePlus />
      </Button>
      <Button onClick={restart} variant="light">
        <BsTrash />
      </Button>
    </div>
  );
};
