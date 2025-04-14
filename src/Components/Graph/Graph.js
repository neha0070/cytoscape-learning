import React, { useEffect, useRef, useState } from "react";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";
import "./Graph.css";
import convertToElements from "../../utils/convertToElements.js";
import getCyStyles from "./cyStyles";
import { generateColor } from "../../utils/colorUtils.js";
import fcoseLayoutConfig from "../../config/fcoseLayoutConfig.js";
cytoscape.use(fcose);

// const parentColors = {
//   Voice: "#ffe0e0",
//   Bixby: "#e0f7fa",
//   NLP: "#e8f5e9",
//   Models: "#f3e5f5",
//   Features: "#fff3e0",
//   UI: "#ede7f6",
//   APIs: "#fbe9e7",
//   Databases: "#e1f5fe",
//   DevOps: "#f9fbe7",
//   Security: "#fce4ec",
//   BackgroundJobs: "#f1f8e9",
// };

const Graph = ({ graphData }) => {
  const cyRef = useRef(null);
  const containerRef = useRef(null);
  const [cyInstance, setCyInstance] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [deletePosition, setDeletePosition] = useState({ x: 0, y: 0 });
  const [deletedEdges, setDeletedEdges] = useState([]);
  const [deletedNodes, setDeletedNodes] = useState([]);

  function getParentColors(graphData) {
    const uniqueParents = [...new Set(graphData.map((node) => node.parent1))];
    const mapping = {};
    uniqueParents.forEach((parent, index) => {
      mapping[parent] = generateColor(index);
    });
    return mapping;
  }

  useEffect(() => {
    const parentColors = getParentColors(graphData);
    const cy = cytoscape({
      container: cyRef.current,
      elements: convertToElements(graphData),
      style: getCyStyles(parentColors),
      layout: fcoseLayoutConfig,
    });

    setCyInstance(cy);

    cy.on("tap", "edge, node", (e) => {
  const ele = e.target;

  console.log("Tapped element:", ele.id(), "isNode:", ele.isNode(), "Outgoing edges:", ele.outgoers('edge').length, ele.incomers('edge').length);

  if (ele.isParent()) return;

  const { x, y } = e.renderedPosition;
  setSelectedElement(ele);
  setDeletePosition({ x, y });
});

    cy.on("tap", (e) => {
      if (e.target === cy) {
        setSelectedElement(null);
      }
    });

    return () => cy.destroy();
  }, [graphData]);

  const handleDelete = () => {
    if (selectedElement) {
      const json = selectedElement.json();
  
      if (selectedElement.isEdge()) {
        setDeletedEdges((prev) => [...prev, json]);
        selectedElement.remove();
      } else if (selectedElement.isNode()) {
        setDeletedNodes((prev) => [...prev, json]);
  
        const parentId = selectedElement.data("parent");
        selectedElement.remove();
  
        // After removing the child, check if parent has any children left
        if (parentId && cyInstance) {
          const parent = cyInstance.getElementById(parentId);
          const remainingChildren = parent.children();
  
          if (remainingChildren.length === 0) {
            setDeletedNodes((prev) => [...prev, parent.json()]);
            parent.remove();
            console.log(`Deleted parent node ${parentId} as it had no children left.`);
          }
        }
      }
  
      setSelectedElement(null);
    }
  };
  

  return (
    <div className="position-relative" ref={containerRef}>
      <div id="cy" ref={cyRef} />
      {selectedElement && (
        <button
          onClick={handleDelete}
          className="btn btn-danger graph-delete-btn"
          style={{ left: deletePosition.x, top: deletePosition.y }}
        >
          Delete {selectedElement.isEdge() ? "Edge" : "Node"}
        </button>
      )}
      <div className="debug-info">
        <strong>Deleted Edges:</strong> {deletedEdges.length} <br />
        <strong>Deleted Nodes:</strong> {deletedNodes.length}
      </div>
    </div>
  );
};

export default Graph;
