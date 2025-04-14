// config/fcoseLayoutConfig.js
const fcoseLayoutConfig = {
    name: "fcose",
    animate: true,
    fit: true,
    padding: 50,
  
    nodeSeparation: 150,
    nodeRepulsion: () => 8000,
    idealEdgeLength: () => 120,
    edgeElasticity: () => 0.45,
  
    compoundSpacing: 150,
    gravity: 1,
    gravityRangeCompound: 2,
    gravityCompound: 2.5,
    nestingFactor: 1.5,
  
    tilingPaddingVertical: 20,
    tilingPaddingHorizontal: 20,
  
    clusteringStep: -1,
    samplingType: true,
    sampleSize: 25,
    coolingFactor: 0.99,
  
    quality: "proof",
  };
  
  export default fcoseLayoutConfig;
  