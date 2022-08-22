import "./App.css";
// import Hello from "./components/Hello";
// import FuncComponent from "./components/FuncComponents";
// import MyClass from "./components/MyClass";
// import Name from "./components/Name";
// import Example from "./components/Example";
// import Example2 from "./components/Example2";
// import Form from "./components/Form";
// import MyFragment from "./components/MyFragment";
import ComponentA from "./components/ComponentA";
import Counter from "./components/Counter";
import CounterHook from "./components/CounterHook";
import FetchData from "./components/FetchData";
import ComponentC from "./components/ComponentC";
import React from "react";
import UseReducer from "./components/UseReducer";
import DataFetching from "./components/DataFetching";

export const MyContext = React.createContext();

function App() {
  function clicked() {
    alert("Inside App.js");
  }

  return (
    <div className="container">
      {/* <Name />
      <Example names={["Python", "Java", "JavaScript", "C#"]} />
      <Example2 names={["React", "React Native", "Django"]} />
      <Form />  
      <MyFragment />
      <ComponentA />
      <Counter />
      <CounterHook />
      <FetchData />
      <MyContext.Provider value="This data is with useContext Hook">
        <ComponentC />
      </MyContext.Provider> */}

      <UseReducer />

      <DataFetching />
    </div>
  );
}

export default App;
