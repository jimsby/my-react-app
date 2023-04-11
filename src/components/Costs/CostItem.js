import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react"

function CostItem(props) {
  

  const [name, setDescription] =  useState(props.data.name);
  const [amount, setAmount] =  useState(props.data.amount);

  const changeDescriptionHandler = () => {
    setDescription(name === props.data.name ? "Changed!" : props.data.name);
    console.log(name)
  };

  const upAmountHandler = () => {
    setAmount(amount + 1);
  };

  const downAmountHandler = () => {
    setAmount(amount - 1);
  };

  return (
    <Card className="cost-item">
      <CostDate data={props.data} />
      <div className="cost-item__description">
        <h2>{name}</h2>
        <div className="cost-item__price">${amount}</div>
      </div>
      <button onClick={changeDescriptionHandler}>
        изменить <li />
        описание
      </button>
      <button onClick={upAmountHandler}>
       +
      </button>
      <button onClick={downAmountHandler}>
        -
      </button>
    </Card>
  );
}

export default CostItem;
