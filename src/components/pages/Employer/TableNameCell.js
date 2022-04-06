import React from "react";

export default function TableNameCell(props) {
  console.log("tablenamecell");
  console.log(props);
  return (
    <div>
      <img
        src={props.data.Image}
        style={{ height: "30px", width: "30px", verticalAlign: "text-bottom" }}
      ></img>{" "}
      &nbsp; &nbsp;
      <div
        style={{ display: "inline", fontSize: "18px", verticalAlign: "super" }}
      >
        {props.data.Title} &nbsp;
      </div>
      <div
        style={{
          color: "gray",
          display: "inline",
          fontSize: "18px",
          verticalAlign: "super",
        }}
      >
        {props.data.SubTitle}
      </div>
    </div>
  );
}
