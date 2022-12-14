import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "react-toastify/dist/ReactToastify.css";
import ContextApi from "./ContextApi";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <ContextApi>
    <App />
  </ContextApi>
);
