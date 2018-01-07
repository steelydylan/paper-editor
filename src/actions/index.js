import * as types from "../constants/actionTypes";

export const addNewline = line => ({ type: types.ADDNEWLINE, line });
export const updateLine = (line, value) => ({
  type: types.UPDATELINE,
  line,
  value
});
export const changeType = (line, tagName) => ({ type: types.CHANGETYPE, line, tagName });
