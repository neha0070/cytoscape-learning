// config/fcoseLayoutConfig.js
const fcoseLayoutConfig = {
  name: "fcose",
  animate: true,
  fit: true,
  padding: 50,

  nodeSeparation: 200, // More space between nodes
  nodeRepulsion: () => 150000, // Stronger repulsion to avoid overlap
  idealEdgeLength: () => 150,
  edgeElasticity: () => 0.45,

  compoundSpacing: 100, // Space between parent and children
  gravity: 1.2,
  gravityRangeCompound: 2.5,
  gravityCompound: 2.5,
  nestingFactor: 1.5,

  tilingPaddingVertical: 30,
  tilingPaddingHorizontal: 30,

  clusteringStep: -1,
  samplingType: true,
  sampleSize: 25,
  coolingFactor: 0.99,

  quality: "proof",
};

export default fcoseLayoutConfig;
