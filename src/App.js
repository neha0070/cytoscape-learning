import logo from './logo.svg';
import './App.css';
import Graph from './Components/Graph/Graph';

function App() {
  const graphData = [
    { node_name: "voice", connects_to: ["bixby", "bixby-prov"], parent1: "Voice", xyz: "alpha" },
    { node_name: "bixby", connects_to: ["bixby-prov"], parent1: "Bixby", xyz: "beta" },
    { node_name: "bixby-prov", connects_to: [], parent1: "Bixby", xyz: "gamma" },
    
    { node_name: "assistant", connects_to: ["nlp", "asr"], parent1: "Voice", xyz: "delta" },
    { node_name: "nlp", connects_to: ["ner"], parent1: "NLP", xyz: "epsilon" },
    { node_name: "asr", connects_to: ["nlp"], parent1: "Voice", xyz: "zeta" },
    { node_name: "ner", connects_to: [], parent1: "NLP", xyz: "eta" },
    
    { node_name: "dialogue", connects_to: ["tts"], parent1: "Voice", xyz: "theta" },
    { node_name: "tts", connects_to: [], parent1: "Voice", xyz: "iota" },
  
    { node_name: "model-a", connects_to: ["model-b"], parent1: "Models", xyz: "kappa" },
    { node_name: "model-b", connects_to: ["model-c"], parent1: "Models", xyz: "lambda" },
    { node_name: "model-c", connects_to: [], parent1: "Models", xyz: "mu" },
  
    { node_name: "feature-x", connects_to: ["feature-y"], parent1: "Features", xyz: "nu" },
    { node_name: "feature-y", connects_to: ["feature-z"], parent1: "Features", xyz: "xi" },
    { node_name: "feature-z", connects_to: [], parent1: "Features", xyz: "omicron" },
  
    { node_name: "ui-button", connects_to: ["ui-dialog"], parent1: "UI", xyz: "pi" },
    { node_name: "ui-dialog", connects_to: ["ui-tooltip"], parent1: "UI", xyz: "rho" },
    { node_name: "ui-tooltip", connects_to: [], parent1: "UI", xyz: "sigma" },
  
    { node_name: "api-gateway", connects_to: ["service-a", "service-b"], parent1: "APIs", xyz: "tau" },
    { node_name: "service-a", connects_to: ["db-a"], parent1: "APIs", xyz: "upsilon" },
    { node_name: "service-b", connects_to: ["db-b"], parent1: "APIs", xyz: "phi" },
    { node_name: "db-a", connects_to: [], parent1: "Databases", xyz: "chi" },
    { node_name: "db-b", connects_to: [], parent1: "Databases", xyz: "psi" },
  
    { node_name: "logger", connects_to: ["monitor"], parent1: "DevOps", xyz: "omega" },
    { node_name: "monitor", connects_to: [], parent1: "DevOps", xyz: "alpha2" },
  
    { node_name: "auth", connects_to: ["session", "oauth"], parent1: "Security", xyz: "beta2" },
    { node_name: "session", connects_to: [], parent1: "Security", xyz: "gamma2" },
    { node_name: "oauth", connects_to: [], parent1: "Security", xyz: "delta2" },
  
    { node_name: "scheduler", connects_to: ["cron"], parent1: "BackgroundJobs", xyz: "epsilon2" },
    { node_name: "cron", connects_to: [], parent1: "BackgroundJobs", xyz: "zeta2" },
  ];
  
  
  
  return (
    // <header>This is start</header>
    <Graph graphData={graphData}/>
  );
}

export default App;
