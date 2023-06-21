import React from "react";
import DownloadLink from "react-download-link";
import demoData from "../demoData";

export default () => (
  <DownloadLink
    className="downloadLink"
    filename="demo_template.csv"
    exportFile={() => Promise.resolve(demoData)}
    label={
      <button className="waves-effect waves-light btn button">
        <i className="material-icons left">cloud_download</i>demo CSV
      </button>
    }
  />
);
