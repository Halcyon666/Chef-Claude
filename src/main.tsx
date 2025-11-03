import { createRoot } from "react-dom/client";
import App from "./chef claude/App";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
