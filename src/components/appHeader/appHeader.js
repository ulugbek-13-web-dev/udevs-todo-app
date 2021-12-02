import React from "react";
import "./appHeader.css";
export default function AppHeader() {
  return (
    <div className="app-header mb-3">
      <h1>Todo List</h1>
      <h3 className="h5 text-muted">
        <span>3</span> more to do, <span>0</span> done
      </h3>
    </div>
  );
}
