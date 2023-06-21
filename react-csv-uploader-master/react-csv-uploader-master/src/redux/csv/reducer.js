import actions from "./actions";
import { getcolumnRow } from "../../helpers";

export const rowColor = {
  normal: "#000",
  added: "#ff0000",
  updated: "#1abc9c"
};

const initState = {
  datas: [],
  columns: [],
  primaryKey: undefined,
  loading: false,
  noAdded: -1,
  noUpdated: -1
};

export default function todoReducer(state = initState, action) {
  switch (action.type) {
    case actions.TOGGLE_LOADING:
      return { ...state, loading: !state.loading };
    case actions.CHANGE_PRIMARY:
      return { ...state, primaryKey: action.primaryKey.value };
    case actions.UPDATE_DATA: {
      const datas = state.datas;
      let noAdded = 0;
      let noUpdated = 0;
      const addedRowIndex = [];
      const updatedRowKey = [];
      const { columns, newData } = getcolumnRow(action.newData, state.columns);
      const primaryKey =
        columns.indexOf(state.primaryKey) !== -1
          ? state.primaryKey
          : columns[0];
      const dataKeys = datas.map(singleData => singleData[primaryKey]);
      newData.forEach(singleData => {
        const singleIndex = singleData[primaryKey];
        const index = dataKeys.indexOf(singleIndex);
        if (index === -1) {
          noAdded++;
          addedRowIndex.push(datas.length);
          datas.push(singleData);
          dataKeys.push(singleIndex);
        } else {
          let updated = false;
          columns.forEach(column => {
            if (datas[index][column] !== singleData[column]) {
              updated = true;
              datas[index][column] = singleData[column];
              updatedRowKey.push(`${column}${index}`);
            }
          });
          if (updated) {
            noUpdated++;
          }
        }
      });
      return {
        ...state,
        loading: false,
        primaryKey,
        datas,
        columns,
        noAdded,
        noUpdated,
        addedRowIndex,
        updatedRowKey
      };
    }
    default:
      return state;
  }
}
