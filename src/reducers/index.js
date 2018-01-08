import * as types from "../constants/actionTypes";

const initialState = {
  lines: [
    {
      html: "",
      tagName: "p"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADDNEWLINE:
      return Object.assign({}, state, {
        lines: [
          ...state.lines.slice(0, action.line),
          { html: "", tagName: "p" },
          ...state.lines.slice(action.line)
        ]
      });
    case types.UPDATELINE:
      const currentLine1 = state.lines[action.line];
      return Object.assign({}, state, {
        lines: [
          ...state.lines.slice(0, action.line),
          Object.assign({}, currentLine1, {html: action.value}),
          ...state.lines.slice(action.line + 1)
        ]
      });
    case types.CHANGETYPE:
      const currentLine2 = state.lines[action.line];
      return Object.assign({}, state, {
        lines: [
          ...state.lines.slice(0, action.line),
          Object.assign({}, currentLine2, {tagName: action.tagName}),
          ...state.lines.slice(action.line + 1)
        ]
      });
    case types.REMOVELINE:
      return Object.assign({}, state, {
        lines: [...state.lines.slice(0, action.line), ...state.lines.slice(action.line + 1)]
      })
    default:
      return state;
  }
};
