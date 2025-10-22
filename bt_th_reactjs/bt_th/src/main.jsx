import React from "react";
import ReactDOM from "react-dom/client";

const name = "Nguyen Duc Dung";

const element = React.createElement("h1", { style: { textAlign: "center" } }, name);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);