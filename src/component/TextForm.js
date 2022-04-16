import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Type your text here.");
  const onChangeEventHandler = (event) => {
    setText(event.target.value);
  };

  const onClickUpperCaseHndler = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const onClickLowerCaseHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const removeExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
  }

  return (
    <>
      <div>
        <h3>{props.heading}</h3>
        <div className="container my-3 mb-3">
          <textarea
            className="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={onChangeEventHandler}
          />
          <button
            className="btn btn-primary my-3"
            onClick={onClickUpperCaseHndler}
          >
            Convert To Upper Case
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={onClickLowerCaseHandler}
          >
            Convert To Lower case
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={removeExtraSpace}>
            Remove Extra Space
          </button>
          <button className="btn btn-primary my-3 mx-2">Count Words</button>
          <button className="btn btn-primary my-3 mx-2">Count Charactor</button>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your text summery</h2>
        <p>
          {text.split(" ")[0] === "" ? 0 : text.split(" ").length} words and{" "}
          {text.length} charactors
        </p>
      </div>
    </>
  );
}
