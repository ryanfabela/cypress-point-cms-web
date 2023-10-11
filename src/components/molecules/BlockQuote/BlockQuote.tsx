import React from "react";
import styles from "./BlockQuote.module.scss";
import { Card } from "../../atoms/Card";

export interface BlockQuoteProps {
  children: React.ReactNode;
}

export const BlockQuote = ({ children }: BlockQuoteProps) => {
  return (
    <Card>
      <div className={styles.blockQuoteContents}>
        <img src="https://placehold.co/50x50" />
        <div>{children}</div>
      </div>
    </Card>
  );
};
