
const convertToElements = (data) => {
  const nodes = data.map((node) => ({
    data: {
      id: node.node_name,
      label: node.node_name,
      parent1: node.parent1,
      xyz: node.xyz,
    },
  }));

  const edges = [];

  data.forEach((node) => {
    node.connects_to.forEach((target) => {
      edges.push({
        data: {
          id: `${node.node_name}-${target}`,
          source: node.node_name,
          target,
        },
      });
    });
  });
  console.log("edges", edges);
  console.log("nodes", nodes);
  return [...nodes, ...edges];
};

export default convertToElements;