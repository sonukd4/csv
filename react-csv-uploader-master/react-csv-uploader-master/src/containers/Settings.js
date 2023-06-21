import React from "react";
import { connect } from "react-redux";
import ImportCSV from "../components/importCSV";
import DownloadDemo from "../components/downloadDemo";
import PrimaryKey from "../components/primaryKey";
import actions from "../redux/csv/actions";

const Settings = ({
  primaryKey,
  columns,
  changePrimaryKey,
  updateData,
  toggleLoading
}) => (
  <div className="settings">
    <div className="settingsInfo">
      Upload your CSV file, a demo template is given below
    </div>
    <DownloadDemo />
    <div className="settingsInfo">Uploaded file should be in CSV extension</div>
    <ImportCSV updateData={updateData} toggleLoading={toggleLoading} />
    <PrimaryKey
      columns={columns}
      primaryKey={primaryKey}
      changePrimaryKey={changePrimaryKey}
    />
  </div>
);

export default connect(state => state.CSV, actions)(Settings);
