import React, { useEffect, useRef } from "react";
import cytoscape from "cytoscape";
import "./Graph.css";
import convertToElements from "./convertToElements.js"; // Import the convertToElements function

const Graph = ({graphData}) => {
  const cyRef = useRef(null); // Create a ref to the div
  
  

  useEffect(() => {
    // Initialize Cytoscape only once when the component mounts
    cytoscape({
      container: cyRef.current, // use ref instead of document.getElementById

      elements: convertToElements(graphData), // Convert the graph data to Cytoscape elements

      style: [
        {
          selector: "node",
          style: {
            "background-color": "#61bffc",
            label: "data(id)",
            "text-valign": "center",
            "text-halign": "center",
            "font-size": "12px",
            color: "#000",
            width: "label",
            height: "label",
            padding: "10px",
            "border-width": 2,
            "border-color": "#333",
            shape: "roundrectangle",
          },
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
          },
        },
      ],

      layout: {
        name: "grid",
        rows: 1,
      },
    });
  }, []);

  return <div id="cy" ref={cyRef}></div>; // This is where Cytoscape will mount
};

export default Graph;
