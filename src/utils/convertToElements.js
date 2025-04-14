const convertToElements = (graphData) => {
  const elements = [];

  // First, add a set of all unique parents
  const parentSet = new Set(graphData.map((node) => node.parent1));
  parentSet.forEach((parentName) => {
    elements.push({
      data: { id: parentName },
      classes: "parent",
    });
  });

  // Add nodes and edges
  graphData.forEach((node) => {
    elements.push({
      data: {
        id: node.node_name,
        parent: node.parent1,
      },
    });

    node.connects_to.forEach((target) => {
      elements.push({
        data: {
          id: `${node.node_name}-${target}`,
          source: node.node_name,
          target: target,
        },
      });
    });
  });

  return elements;
};

export default convertToElements;
