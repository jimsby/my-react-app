import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

function Costs(props) {
  const rows = [];
  for (let i = 0; i < props.costs.length; i++) {
    rows.push(<CostItem data={props.costs[i]} key={i} />);
  }

  const [selectedYear, setSelectorYear] = useState("2021");

  const filterChangeYearHandler = (year) => {
    setSelectorYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter onChangeYear={filterChangeYearHandler} year={selectedYear}/>
        {rows}
      </Card>
    </div>
  );
}

export default Costs;
