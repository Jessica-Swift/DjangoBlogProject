import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
// import { Routes, BrowserRouter } from "react-router-dom";
// import Form from "./components/Form";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" component={Login} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// function Router() {
//   return (
//     <BrowserRouter>
//       <Routes exact path="/" component={App} />
//       {/* <Routes exact path="/login" component={Form} /> */}
//     </BrowserRouter>
//   );
// }

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/articles" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
