import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

export default ({ columns, primaryKey, changePrimaryKey }) =>
  columns.length === 0 ? (
    <div />
  ) : (
    <div>
      <div className="settingsInfo">
        New rows will be updated according to the following primary column
      </div>
      <Select
        className="select"
        clearable={false}
        name="primaryKey"
        value={primaryKey}
        onChange={changePrimaryKey}
        options={columns.map(column => ({ value: column, label: column }))}
      />
    </div>
  );
