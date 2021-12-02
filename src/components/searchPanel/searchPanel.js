import React from "react";
import "./searchPanel.css";

export default function SearchPanel() {
  return (
    <div className="search-panel form-group d-inline-block">
      <input
        className="form-control"
        placeholder="type to search"
        autoComplete="off"
      ></input>
    </div>
  );
}
