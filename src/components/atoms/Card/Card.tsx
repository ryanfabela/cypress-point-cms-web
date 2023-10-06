import React from "react";
import styles from "./Card.module.scss";
import clsx from "clsx";

export interface CardProps {
  children: React.ReactNode;
  variant?:
    | "black"
    | "white"
    | "gray"
    | "lightPrimary"
    | "primary"
    | "secondary"
    | "tertiary"
    | "gray";
}

export const Card = ({ children, variant = "white" }: CardProps) => (
  <div className={clsx(styles.card, styles[variant])}>{children}</div>
);
