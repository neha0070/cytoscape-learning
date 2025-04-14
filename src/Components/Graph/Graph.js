import React, { useEffect, useRef } from "react";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";
import "./Graph.css";
import convertToElements from "./convertToElements.js";

cytoscape.use(fcose);

const parentColors = {
  Voice: "#ffe0e0",
  Bixby: "#e0f7fa",
  NLP: "#e8f5e9",
  Models: "#f3e5f5",
  Features: "#fff3e0",
  UI: "#ede7f6",
  APIs: "#fbe9e7",
  Databases: "#e1f5fe",
  DevOps: "#f9fbe7",
  Security: "#fce4ec",
  BackgroundJobs: "#f1f8e9",
};

const Graph = ({ graphData }) => {
  const cyRef = useRef(null);

  useEffect(() => {
    const elements = convertToElements(graphData);

    const cy = cytoscape({
      container: cyRef.current,
      elements,
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
          selector: ":parent",
          style: {
            "background-color": ele => parentColors[ele.id()] || "#eee",
            "border-width": 2,
            "border-color": "#444",
            "label": "data(id)",
            "text-valign": "top",
            "text-halign": "center",
            "font-size": "14px",
            "text-wrap": "wrap",
            shape: "roundrectangle",
            padding: "30px",
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
        name: "fcose",
        animate: true,
        randomize: true,
        fit: true,
        padding: 30,
        nodeSeparation: 100,
        quality: "default",
      },
    });

    return () => {
      cy.destroy();
    };
  }, [graphData]);

  return <div id="cy" ref={cyRef} ></div>;
};

export default Graph;
