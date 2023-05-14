import { Button } from "react-bootstrap";
import { IoAdd } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";

export const ItemCount = ({ max, cantidad, modify }) => {
  const sumar = () => {
    if (cantidad < max) {
      modify(cantidad + 1);
    }
  };
  const restar = () => {
    if (cantidad > 1) {
      modify(cantidad - 1);
    }
  };

  return (
    <div className="input-group mb-4">
      <IoAdd className="iconStyle" size="1.7rem" onClick={sumar} />
      <input className="form-control text-center" value={cantidad} />
      <RiSubtractFill className="iconStyle" size="1.7rem" onClick={restar} />
    </div>
  );
};
