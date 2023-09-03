import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

export const Button = ({
  children,
  className,
  variant,
  size,
  ...rest
}: ButtonProps): JSX.Element => (
  <button
    className={clsx(styles.button, styles[variant], styles[size], className)}
    {...rest}
  >
    {children}
  </button>
);
