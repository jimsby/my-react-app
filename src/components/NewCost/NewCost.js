import "./NewCost.css";
import CostForm from "./CostForm";
import React, { useState } from "react";

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    inputCostDataHandler();
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={inputCostDataHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
