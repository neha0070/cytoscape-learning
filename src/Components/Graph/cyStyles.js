// cyStyles.js

const getCyStyles = (parentColors) =>  [
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
      label: "data(id)",
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
  {
    selector: "edge:selected",
    style: {
      "line-color": "red",
      "target-arrow-color": "red",
      width: 4,
    },
  },
  {
    selector: "node:selected",
    style: {
      "border-color": "red",
      "border-width": 4,
    },
  },
];

export default getCyStyles;
