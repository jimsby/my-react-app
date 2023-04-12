import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostDiagram from "./CostsDiagram";

function Costs(props) {
  const [selectedYear, setSelectorYear] = useState("2021");
  const filteredCosts = props.costs.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });
  const filterChangeYearHandler = (year) => {
    setSelectorYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter
          onChangeYear={filterChangeYearHandler}
          year={selectedYear}
        />
        <CostDiagram costs={filteredCosts}/>
        <CostList costs={filteredCosts}/>
      </Card>
    </div>
  );
}

export default Costs;
