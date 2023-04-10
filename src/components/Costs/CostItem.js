import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

function CostItem(props) {
  return (
    <Card className="cost-item">
      <CostDate data={props.data} />
      <div className="cost-item__description">
        <h2>{props.data.name}</h2>
        <div className="cost-item__price">${props.data.amount}</div>
      </div>
    </Card>
  );
}

export default CostItem;
