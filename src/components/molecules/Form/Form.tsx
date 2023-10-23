import React from "react";
import styles from "./Form.module.scss";
import { InputField } from "../../atoms/InputField";
import { Button } from "../../atoms/Button";
import clsx from "clsx";

export interface FormProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form = ({ onSubmit }: FormProps) => {
  return (
    <form
      className={clsx(styles.form)}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        for (const pair of formData.entries()) {
          console.log(pair);
        }
      }}
    >
      <InputField
        name="name"
        className={clsx(styles.name)}
        placeholder="Name"
      />
      <InputField
        name="email"
        className={clsx(styles.email)}
        placeholder="Email"
      />
      <InputField
        name="subject"
        className={clsx(styles.subject)}
        placeholder="Subject"
      />
      <InputField
        name="phone"
        className={clsx(styles.phone)}
        placeholder="Phone Number"
      />
      <textarea
        name="emailBody"
        className={clsx(styles.emailBody)}
        placeholder="Body"
        rows={5}
      />
      <Button role="submit" className={clsx(styles.submit)} variant="primary">
        Submit
      </Button>
    </form>
  );
};
