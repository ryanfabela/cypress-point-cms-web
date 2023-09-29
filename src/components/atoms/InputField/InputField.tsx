import React from "react";
import clsx from "clsx";
import styles from "./InputField.module.scss";

export interface InputFieldProps {
}

export const InputField = ({
    placeholder,
    onChange,
    onFocus
}: InputFieldProps) => (
    <input className={clsx(styles.inputField)} placeholder={placeholder} onChange={onChange} onFocus={onFocus}/>
);
