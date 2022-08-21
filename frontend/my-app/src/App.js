import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import FuncComponent from "./components/FuncComponents";
import MyClass from "./components/MyClass";
import Name from "./components/Name";

function App() {
  function clicked() {
    alert("Inside App.js");
  }

  return (
    <div className="container">
      <Name />
    </div>
  );
}

export default App;
