import React, { useState } from "react";

function Form2(props) {
  const [title, setTitle] = useState(props.article.title);
  const [description, setDescription] = useState(props.article.description);
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
          ></textarea>
          <br />
          <button className="btn btn-success">Update Article</button>
        </div>
      ) : null}
    </div>
  );
}

export default Form2;
