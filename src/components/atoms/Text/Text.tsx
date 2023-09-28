import React from "react";
import clsx from "clsx";
import styles from "./Text.module.scss";

export interface TextProps {
  children?: React.ReactNode;
  variant?: "regular" | "bold" | "italic";
}

export const Text = ({ children, variant = "regular" }: TextProps) => {
  return <div className={clsx(styles.text, styles[variant])}>{children}</div>;
};
