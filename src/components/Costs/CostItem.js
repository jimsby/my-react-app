import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function CostItem(props) {
  const [description, setDescription] = useState(props.description);
  const [amount, setAmount] = useState(props.amount);

  const changeDescriptionHandler = () => {
    setDescription(
      description === props.description ? "Changed!" : props.description
    );
  };

  const upAmountHandler = () => {
    setAmount(parseFloat(amount) + 1);
  };

  const downAmountHandler = () => {
    setAmount(parseFloat(amount) - 1);
  };

  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <h2>{description}</h2>
          <div className="cost-item__price">${amount}</div>
        </div>
        <button onClick={changeDescriptionHandler}>
          изменить <li />
          описание
        </button>
        <button onClick={upAmountHandler}>+</button>
        <button onClick={downAmountHandler}>-</button>
      </Card>
    </li>
  );
}

export default CostItem;
