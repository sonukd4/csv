import React, { Component } from "react";
import ReactFileReader from "react-file-reader";
import Papa from "papaparse";

export default class extends Component {
  handleFiles = files => {
    const { updateData, toggleLoading } = this.props;
    toggleLoading();
    Papa.parse(files[0], {
      complete: ({ data }) => {
        if (data.length > 1) {
          updateData(data);
        } else {
          console.log("Import error");
        }
      }
    });
  };
  render() {
    const child = this.props.child || (
      <button className="waves-effect waves-light btn button">
        <i className="material-icons left">cloud_upload</i>Upload CSV
      </button>
    );
    return (
      <ReactFileReader
        handleFiles={this.handleFiles}
        fileTypes={[".csv"]}
        base64={false}
        multipleFiles={false}
      >
        {child}
      </ReactFileReader>
    );
  }
}
