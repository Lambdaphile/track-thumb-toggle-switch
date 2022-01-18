import React from "react";

import { Preview, Switch } from "./components";
import "./styles.css";

const TYPES = {
  CHANGE_SIZE: "CHANGE_SIZE",
  CHANGE_COLOR: "CHANGE_COLOR",
  CHANGE_CHECKED: "CHANGE_CHECKED"
};

const initialState = {
  0: {
    size: 8,
    color: "#c485db",
    checked: false
  },
  1: {
    size: 10,
    color: "#6bbfdb",
    checked: false
  }
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.CHANGE_SIZE:
      return {
        ...state,
        [action.payload.switchIndex]: {
          ...state[action.payload.switchIndex],
          size: action.payload.value
        }
      };
    case TYPES.CHANGE_COLOR:
      return {
        ...state,
        [action.payload.switchIndex]: {
          ...state[action.payload.switchIndex],
          color: action.payload.value
        }
      };
    case TYPES.CHANGE_CHECKED:
      return {
        ...state,
        [action.payload.switchIndex]: {
          ...state[action.payload.switchIndex],
          checked: action.payload.value
        }
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  function handleChange({ type, switchIndex, value }) {
    dispatch({
      type,
      payload: {
        switchIndex,
        value
      }
    });
  }

  return (
    <div className="App">
      {Object.values(state).map((switchState, i) => (
        <div className="preview-wrapper" key={i.toString()}>
          <Preview
            size={switchState.size}
            color={switchState.color}
            onChangeSize={(value) =>
              handleChange({ type: TYPES.CHANGE_SIZE, switchIndex: i, value })
            }
            onChangeColor={(value) =>
              handleChange({ type: TYPES.CHANGE_COLOR, switchIndex: i, value })
            }
          >
            <Switch
              checked={switchState.checked}
              size={switchState.size}
              color={switchState.color}
              onChange={(value) =>
                handleChange({
                  type: TYPES.CHANGE_CHECKED,
                  switchIndex: i,
                  value
                })
              }
            />
          </Preview>
        </div>
      ))}
    </div>
  );
}
