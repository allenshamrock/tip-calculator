/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const RootContext = createContext();

export const RootProvider = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [personInput, setPersonInput] = useState(0);
  const [percentage, setPercentage] = useState(null);
  const handleBillChange = (e) => {
    setBill(e.target.value);
  };
  const handlePersonInputChange = (e) => {
    setPersonInput(e.target.value);
  };

  const calculateToPercentage = (percent) => {
    if (!isNaN(bill) && !isNaN(personInput) && personInput > 0) {
      const tipAmount =
        (parseFloat(bill) * (percent / 100)) / parseFloat(personInput);
      setPercentage(tipAmount.toFixed(2));
    } else {
      setPercentage(null);
    }
  };

  const calculateTotal = () => {
    if (
      isNaN(bill) ||
      isNaN(personInput) ||
      bill < 0 ||
      personInput <= 0 ||
      bill > 1000000
    ) {
      return null;
    }
    if (
      !isNaN(bill) &&
      !isNaN(personInput) &&
      personInput > 0 &&
      percentage !== null
    ) {
      const total =
        parseFloat(bill) / parseFloat(personInput) + parseFloat(percentage);
      return total.toFixed(2);
    } else {
      return;
    }
  };

  return (
    <RootContext.Provider
      value={{
        calculateToPercentage,
        calculateTotal,
        handleBillChange,
        handlePersonInputChange,
        bill,
        percentage,
        personInput,
        setPercentage,
        setPersonInput,
        setBill,
      }}
    >
      <div className="root">{children}</div>
    </RootContext.Provider>
  );
};

export default RootContext;
