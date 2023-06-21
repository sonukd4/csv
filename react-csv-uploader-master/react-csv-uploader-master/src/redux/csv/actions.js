const actions = {
  TOGGLE_LOADING: "TOGGLE_LOADING",
  UPDATE_DATA: "UPDATE_DATA",
  CHANGE_PRIMARY: "CHANGE_PRIMARY",
  toggleLoading: () => ({ type: actions.TOGGLE_LOADING }),
  updateData: newData => ({ type: actions.UPDATE_DATA, newData }),
  changePrimaryKey: primaryKey => ({ type: actions.CHANGE_PRIMARY, primaryKey })
};
export default actions;
