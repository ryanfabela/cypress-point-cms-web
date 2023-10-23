import React from "react";
import clsx from "clsx";
import styles from "./InputField.module.scss";

export interface InputFieldProps {
  name?: string;
  className?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const InputField = ({
  className,
  placeholder,
  onChange,
  onFocus,
  name,
}: InputFieldProps) => (
  <input
    name={name}
    className={clsx(styles.inputField, className)}
    placeholder={placeholder}
    onChange={onChange}
    onFocus={onFocus}
  />
);
