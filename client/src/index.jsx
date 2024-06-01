import React from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/@empirica/core/dist/player.css";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
