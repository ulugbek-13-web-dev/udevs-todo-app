import React from "react";
import "./filterPanel.css";

export default function FilterPanel() {
  return (
    <div className="filter-panel btn-group d-inline-block">
      <button className="btn btn-info text-white">All</button>
      <button className="btn btn-outline-primary">Active</button>
      <button className="btn btn-outline-primary">Done</button>
    </div>
  );
}




