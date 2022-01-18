import React from "react";
import styles from "./index.module.scss";

export default function Preview({
  children,
  size,
  color,
  onChangeSize,
  onChangeColor
}) {
  return (
    <div className={styles.preview}>
      <div className={styles.controls}>
        <label className={styles.label}>
          <span>size:</span>
          <input
            className={styles.sizeInput}
            type="range"
            value={size}
            min="5"
            max="15"
            onChange={({ currentTarget: { value } }) =>
              onChangeSize(parseInt(value, 10))
            }
          />
        </label>
        <label className={styles.label}>
          <span>color:</span>
          <input
            className={styles.colorInput}
            type="color"
            value={color}
            onChange={({ currentTarget: { value } }) => onChangeColor(value)}
          />
        </label>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
