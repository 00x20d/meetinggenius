import React from "react";
import { createRoot } from "react-dom/client";
import "../src/globals.css"; // Import your Tailwind CSS
import Popup from "./Popup";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
