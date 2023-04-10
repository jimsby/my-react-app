import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";

function Costs(props) {
  const rows = [];
  for (let i = 0; i < props.costs.length; i++) {
    rows.push(<CostItem data={props.costs[i]} />);
  }

  return (
    <Card className="costs">
      {rows}
    </Card>
  );
}

export default Costs;
