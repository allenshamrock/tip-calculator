import { useContext } from "react";
import RootContext from "../RootContext";
import Button from "./Button";
import dollar from "../assets/icon-dollar.svg";
import person from "../assets/icon-person.svg";
const Bill = () => {
  const {
    handleBillChange,
    bill,
    handlePersonInputChange,
    calculateToPercentage,
    personInput,
  } = useContext(RootContext);
  return (
    <div className="bill-container">
      <div className="input-wrapper">
        <label htmlFor="Bill">Bill</label>
        <div className="input-icon">
          <input
            type="text"
            value={bill}
            onChange={handleBillChange}
            className="input"
          />
          <span className="icon">
            <img src={dollar} alt="dollar icon" />
          </span>
        </div>
      </div>
      <div className="input-wrapper">
        <label htmlFor="Select">Select Tip %</label>
        <div className="buttons">
          <Button
            classname="btn-percentage"
            onClick={() => calculateToPercentage(5)}
          >
            5%
          </Button>
          <Button
            classname="btn-percentage"
            onClick={() => calculateToPercentage(10)}
          >
            10%
          </Button>
          <Button
            classname="btn-percentage"
            onClick={() => calculateToPercentage(15)}
          >
            15%
          </Button>
          <Button
            classname="btn-percentage"
            onClick={() => calculateToPercentage(20)}
          >
            20%
          </Button>
          <Button
            classname="btn-percentage"
            onClick={() => calculateToPercentage(50)}
          >
            50%
          </Button>
          <Button
            classname="btn-percentage"
            onClick={() => calculateToPercentage(0)}
          >
            custom
          </Button>
        </div>
      </div>
      <div className="input-wrapper">
        <label htmlFor="Number">Number of People</label>
        <div className="input-icon">
          <input
            type="text"
            className="input"
            value={personInput}
            onChange={handlePersonInputChange}
          />
          <span className="icon">
            <img src={person} alt="person icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bill;
