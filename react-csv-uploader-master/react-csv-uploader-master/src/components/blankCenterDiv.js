import React from "react";
import ImportCSV from "./importCSV";

export default ({ text, toggleLoading, updateData }) => (
  <ImportCSV
    updateData={updateData}
    toggleLoading={toggleLoading}
    child={
      <div className="blankCenterDiv">
        <div>{text}</div>
      </div>
    }
  />
);
