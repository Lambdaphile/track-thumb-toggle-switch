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
  const [{ 0: switch1, 1: switch2 }, dispatch] = React.useReducer(
    reducer,
    initialState
  );

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
      <div className="preview-wrapper">
        <Preview
          size={switch1.size}
          color={switch1.color}
          onChangeSize={(value) =>
            handleChange({ type: TYPES.CHANGE_SIZE, switchIndex: 0, value })
          }
          onChangeColor={(value) =>
            handleChange({ type: TYPES.CHANGE_COLOR, switchIndex: 0, value })
          }
        >
          <Switch
            checked={switch1.checked}
            size={switch1.size}
            color={switch1.color}
            onChange={(value) =>
              handleChange({
                type: TYPES.CHANGE_CHECKED,
                switchIndex: 0,
                value
              })
            }
          />
        </Preview>
      </div>
      <div className="preview-wrapper">
        <Preview
          size={switch2.size}
          color={switch2.color}
          onChangeSize={(value) =>
            handleChange({ type: TYPES.CHANGE_SIZE, switchIndex: 1, value })
          }
          onChangeColor={(value) =>
            handleChange({ type: TYPES.CHANGE_COLOR, switchIndex: 1, value })
          }
        >
          <Switch
            checked={switch2.checked}
            color={switch2.color}
            size={switch2.size}
            onChange={(value) =>
              handleChange({
                type: TYPES.CHANGE_CHECKED,
                switchIndex: 1,
                value
              })
            }
          />
        </Preview>
      </div>
    </div>
  );
}
