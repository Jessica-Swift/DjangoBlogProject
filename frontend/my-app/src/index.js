import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Routes, BrowserRouter } from "react-router-dom";
// import Form from "./components/Form";

// function Router() {
//   return (
//     <BrowserRouter>
//       <Routes exact path="/" component={App} />
//       {/* <Routes exact path="/login" component={Form} /> */}
//     </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Routes exact path="/" component={App} /> */}
  </React.StrictMode>
);
