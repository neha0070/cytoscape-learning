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

    // Nodes 21-100 (following a similar pattern)
    { node_name: "voice2", connects_to: ["bixby2", "bixby-prov2"], parent1: "Voice", xyz: "alpha3" },
    { node_name: "bixby2", connects_to: ["bixby-prov2"], parent1: "Bixby", xyz: "beta3" },
    { node_name: "bixby-prov2", connects_to: [], parent1: "Bixby", xyz: "gamma3" },

    { node_name: "assistant2", connects_to: ["nlp2", "asr2"], parent1: "Voice", xyz: "delta3" },
    { node_name: "nlp2", connects_to: ["ner2"], parent1: "NLP", xyz: "epsilon2" },
    { node_name: "asr2", connects_to: ["nlp2"], parent1: "Voice", xyz: "zeta2" },
    { node_name: "ner2", connects_to: [], parent1: "NLP", xyz: "eta2" },

    { node_name: "dialogue2", connects_to: ["tts2"], parent1: "Voice", xyz: "theta2" },
    { node_name: "tts2", connects_to: [], parent1: "Voice", xyz: "iota2" },

    { node_name: "model-a2", connects_to: ["model-b2"], parent1: "Models", xyz: "kappa2" },
    { node_name: "model-b2", connects_to: ["model-c2"], parent1: "Models", xyz: "lambda2" },
    { node_name: "model-c2", connects_to: [], parent1: "Models", xyz: "mu2" },

    { node_name: "feature-x2", connects_to: ["feature-y2"], parent1: "Features", xyz: "nu2" },
    { node_name: "feature-y2", connects_to: ["feature-z2"], parent1: "Features", xyz: "xi2" },
    { node_name: "feature-z2", connects_to: [], parent1: "Features", xyz: "omicron2" },

    { node_name: "ui-button2", connects_to: ["ui-dialog2"], parent1: "UI", xyz: "pi2" },
    { node_name: "ui-dialog2", connects_to: ["ui-tooltip2"], parent1: "UI", xyz: "rho2" },
    { node_name: "ui-tooltip2", connects_to: [], parent1: "UI", xyz: "sigma2" },

    { node_name: "api-gateway2", connects_to: ["service-a2", "service-b2"], parent1: "APIs", xyz: "tau2" },
    { node_name: "service-a2", connects_to: ["db-a2"], parent1: "APIs", xyz: "upsilon2" },
    { node_name: "service-b2", connects_to: ["db-b2"], parent1: "APIs", xyz: "phi2" },
    { node_name: "db-a2", connects_to: [], parent1: "Databases", xyz: "chi2" },
    { node_name: "db-b2", connects_to: [], parent1: "Databases", xyz: "psi2" },

    { node_name: "logger2", connects_to: ["monitor2"], parent1: "DevOps", xyz: "omega2" },
    { node_name: "monitor2", connects_to: [], parent1: "DevOps", xyz: "alpha3" },

    { node_name: "auth2", connects_to: ["session2", "oauth2"], parent1: "Security", xyz: "beta3" },
    { node_name: "session2", connects_to: [], parent1: "Security", xyz: "gamma3" },
    { node_name: "oauth2", connects_to: [], parent1: "Security", xyz: "delta3" },

    { node_name: "scheduler2", connects_to: ["cron2"], parent1: "BackgroundJobs", xyz: "epsilon3" },
    { node_name: "cron2", connects_to: [], parent1: "BackgroundJobs", xyz: "zeta3" },

    // Continue adding similar nodes until 100...
];

  
  
  
  return (
    // <header>This is start</header>
    <Graph graphData={graphData}/>
  );
}

export default App;
