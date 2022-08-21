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

function App() {
  return (
    <div className="container">
      <ComponentA />
    </div>
  );
}

// function App() {
//   function clicked() {
//     alert("Inside App.js");
//   }

//   return (
//     <div className="container">
//       {/* <Name />
//       <Example names={["Python", "Java", "JavaScript", "C#"]} />
//       <Example2 names={["React", "React Native", "Django"]} />
//       <Form />   */}

//       <MyFragment />
//     </div>
//   );
// }

export default App;
