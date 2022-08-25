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
import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";
import Form2 from "./components/Form2";
import { useCookies } from "react-cookie";

export const MyContext = React.createContext();

function App() {
  const [articles, setArticles] = useState([]);
  const [editArticle, setEditArticle] = useState(null);
  const [token] = useCookies(["mytoken"]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, []);

  const editBtn = (article) => {
    setEditArticle(article);
  };

  const updatedInformation = (article) => {
    const new_article = articles.map((myarticle) => {
      return myarticle.id === article.id ? article : myarticle;
    });
    setArticles(new_article);
  };

  const articleForm = () => {
    setEditArticle({ title: "", description: "" });
  };

  const insertedInformation = (article) => {
    const new_article = [...articles, article];
    setArticles(new_article);
  };

  const deleteBtn = (article) => {
    const new_article = articles.filter((myarticle) => {
      if (myarticle.id === article.id) {
        return false;
      }
      return true;
    });
    setArticles(new_article);
  };

  // function clicked() {
  //   alert("Inside App.js");
  // }

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h2>Django and ReactJS Course</h2>
          <br />
          <br />
          {/* {articles.map((article) => {
            return <h2>{article.title}</h2>;
          })} */}
          <ArticleList
            articles={articles}
            editBtn={editBtn}
            deleteBtn={deleteBtn}
          />
          {editArticle ? (
            <Form2
              article={editArticle}
              updatedInformation={updatedInformation}
              insertedInformation={insertedInformation}
            />
          ) : null}

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
      </MyContext.Provider>
      <UseReducer />
      <DataFetching /> */}
        </div>
        <div className="col">
          <button onClick={articleForm} className="btn btn-primary">
            Insert Article
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
