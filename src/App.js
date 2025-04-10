import logo from './logo.svg';
import './App.css';
import Graph from './Components/Graph/Graph';

function App() {
  const graphData = [
    {
      node_name: "a",
      connects_to: ["b", "c"],
      parent1: "root",
      xyz: "alpha",
    },
    {
      node_name: "b",
      connects_to: ["c"],
      parent1: "a",
      xyz: "beta",
    },
    {
      node_name: "c",
      connects_to: [],
      parent1: "a",
      xyz: "gamma",
    },
  ];
  
  
  return (
    // <header>This is start</header>
    <Graph graphData={graphData}/>
  );
}

export default App;
