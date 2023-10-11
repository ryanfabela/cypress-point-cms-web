import React from "react";
import clsx from "clsx";
import styles from "./Text.module.scss";

export interface TextProps {
  children?: React.ReactNode;
  variant?: "regular" | "bold" | "italic" | "paragraph" | "blockQuote";
  size?: "small" | "medium" | "large";
}

export const Text = ({ children, variant = "regular", size }: TextProps) => {
  return (
    <div className={clsx(styles.text, styles[variant], styles[`${size}Size`])}>
      {children}
    </div>
  );
};
