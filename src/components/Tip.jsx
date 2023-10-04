import { useContext } from "react";
import Button from "./Button";
import RootContext from "../RootContext";

const Tip = () => {
  const { calculateTotal, percentage, setPersonInput, setBill,setPercentage } =
    useContext(RootContext);
  const totalPerPerson = calculateTotal();

  const handleReset = () => {
    setBill(0);
    setPersonInput(0);
    setPercentage(null)
  };

  return (
    <div className="tip-container">
      <div className="tip-per-person">
        <label>
          Tip Amount /<br /> per person
        </label>
        <strong>
          <span className="dollar">${percentage}</span>
        </strong>
      </div>
      <div className="tip-amount">
        <label>
          Total / <br /> per person
        </label>
        <strong>
          <span className="dollar">${totalPerPerson}</span>
        </strong>
      </div>
      <Button classname="btn-reset" onClick={() =>handleReset()}>
        Reset
      </Button>
    </div>
  );
};

export default Tip;
