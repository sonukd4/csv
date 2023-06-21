import React from "react";
import { connect } from "react-redux";
import clone from "clone";
import ReactTable from "react-table";
import { rowColor } from "../redux/csv/reducer";
import actions from "../redux/csv/actions";
import BlankCenterDiv from "../components/blankCenterDiv";
import Loader from "../components/loader";

import "react-table/react-table.css";

const View = ({
  loading,
  datas,
  primaryKey,
  columns,
  noAdded,
  noUpdated,
  addedRowIndex,
  updatedRowKey,
  updateData,
  toggleLoading
}) => {
  const tableProps = {
    sortable: false,
    multiSort: false,
    resizable: false,
    filterable: false,
    defaultSortDesc: false,
    className: "viewTable",
    showPagination: datas.length > 10,
    pageSize: datas.length > 10 ? 10 : datas.length,
    data: datas,
    columns: columns.map(column => ({
      Header: column,
      accessor: column,
      getProps: (state, rowInfo) => {
        if (rowInfo !== undefined) {
          const { index } = rowInfo;
          let color = rowColor.normal;
          if (addedRowIndex.indexOf(index) !== -1) {
            color = rowColor.added;
          } else if (updatedRowKey.indexOf(`${column}${index}`) !== -1) {
            color = rowColor.updated;
          }
          return { style: { color } };
        }
        return { style: {} };
      }
    }))
  };
  return (
    <div className="view">
      {loading ? (
        <Loader />
      ) : primaryKey ? (
        <div>
          {noAdded === -1 ? (
            ""
          ) : (
            <div>
              <div className="updateInfo">
                <span style={{ color: rowColor.added }}>{noAdded}</span>
                <span>{" rows added and "}</span>
                <span style={{ color: rowColor.updated }}>{noUpdated}</span>
                <span>{" rows updated"}</span>
              </div>
            </div>
          )}
          <ReactTable {...tableProps} />
        </div>
      ) : (
        <BlankCenterDiv
          text="Please Upload a valid CSV file"
          updateData={updateData}
          toggleLoading={toggleLoading}
        />
      )}
    </div>
  );
};

export default connect(state => clone(state.CSV), actions)(View);
