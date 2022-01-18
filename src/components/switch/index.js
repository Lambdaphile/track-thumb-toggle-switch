import React from "react";
import cx from "classnames";
import { v4 as uuidv4 } from "uuid";

import styles from "./index.module.scss";

export default class Switch extends React.Component {
  constructor() {
    super();

    this.uuid = uuidv4();

    this.handleChange = this.handleChange.bind(this);
    this.getStyle = this.getStyle.bind(this);
  }

  handleChange(event) {
    const { onChange = () => {} } = this.props;
    const {
      currentTarget: { checked }
    } = event;

    onChange(checked);
  }

  getStyle(name) {
    const { [name]: style, checked } = this.props;

    console.log(style);
    if (checked && name === "color" && style) {
      return { backgroundColor: style };
    }

    if (name === "size" && style) {
      return { fontSize: style };
    }
  }

  render() {
    const { checked } = this.props;

    return (
      <div
        style={this.getStyle("size")}
        className={cx(styles.switch, { [styles.checked]: checked })}
      >
        <label
          style={this.getStyle("color")}
          className={styles.track}
          htmlFor={this.uuid}
        >
          <input
            checked={checked}
            className={styles.input}
            id={this.uuid}
            type="checkbox"
            onChange={this.handleChange}
          />
          <span className={styles.thumb} />
        </label>
      </div>
    );
  }
}
