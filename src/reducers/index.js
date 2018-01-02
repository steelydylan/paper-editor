import * as types from '../constants/actionTypes';

const initialState = {
  lines: [{
    html: ''
  }]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADDNEWLINE:
      return Object.assign({}, state, {
        lines: [...state.lines.slice(0, action.line), { html: '' }, ...state.lines.slice(action.line)],
      });
    case types.UPDATELINE:
      return Object.assign({}, state, {
        lines: [...state.lines.slice(0, action.line), { html: action.value }, ...state.lines.slice(action.line + 1)]
      });
    default:
      return state;
  }
}