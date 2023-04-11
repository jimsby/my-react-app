import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      id: 'c1',
      date: new Date(2021, 2, 12),
      name: "Холодильник",
      amount: 999.99,
    },
    {
      id: 'c2',
      date: new Date(2021, 4, 10),
      name: "Джинсы",
      amount: 89.99,
    },
    {
      id: 'c3',
      date: new Date(2021, 3, 16),
      name: "Exponenta",
      amount: 2.99,
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('App component');
    costs.push(cost)
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
