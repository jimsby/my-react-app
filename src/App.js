import Costs from "./components/Costs/Costs";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      name: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2021, 4, 10),
      name: "Джинсы",
      amount: 89.99,
    },
    {
      date: new Date(2021, 3, 16),
      name: "Exponenta",
      amount: 2.99,
    },
  ];
  return (
    <div>
      <h1>Старт проекта.</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
