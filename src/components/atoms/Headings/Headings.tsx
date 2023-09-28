import React from "react";
import clsx from "clsx";
import styles from "./Headings.module.scss";

export interface HeadingsProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
}

export const Headings = ({ children, as, ...rest }: HeadingsProps) => {
  const Tag = as;

  return (
    <Tag className={clsx(styles.headings)} {...rest}>
      {children}
    </Tag>
  );
};
