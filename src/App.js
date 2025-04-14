import logo from './logo.svg';
import './App.css';
import Graph from './Components/Graph/Graph';

function App() {
  const graphData = [
    {
      node_name: "voice",
      connects_to: ["bixby", "bixby-prov"],
      parent1: "voice",
      xyz: "alpha",
    },
    {
      node_name: "bixby",
      connects_to: ["bixby-prov"],
      parent1: "Bixby",
      xyz: "beta",
    },
    {
      node_name: "bixby-prov",
      connects_to: [],
      parent1: "Bixby",
      xyz: "gamma",
    },
  ];
  
  
  return (
    // <header>This is start</header>
    <Graph graphData={graphData}/>
  );
}

export default App;
