import React, { useEffect, useState } from "react";
import APIService from "../APIService";

function Form2(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(props.article.title);
    setDescription(props.article.description);
  }, [props.article]);
  const updateArticle = () => {
    APIService.UpdateArticle().then((resp) => props.updatedInformation(resp));
  };
  return (
    <div>
      {props.article ? (
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Please enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <button onClick={updateArticle} className="btn btn-success">
            Update Article
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Form2;
