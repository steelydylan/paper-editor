import * as types from '../constants/actionTypes';

const initialState = {
  lines: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADDNEWLINE:
      if (!action.line) {
        return Object.assign({}, state, {
          lines: [...state.lines, {}],
        });  
      } else {
        return Object.assign({}, state, {
          lines: [...state.lines.slice(0, action.line), {}, ...state.lines.slice(action.line)],
        });
      }
    default:
      return state;
  }
}