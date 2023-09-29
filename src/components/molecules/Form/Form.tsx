import React from "react";
import "./Form.module.scss";
import { InputField } from "../../atoms/InputField";
import { Button } from "../../atoms/Button"

export interface FormProps {
}

export const Form = ({
    placeholder,
    resultText
}): FormProps => {
    const [name, setName] = React.useState();
    const [isSubmitted, setIsSubmitted] = React.useState()

    return (
        <div>
            <div>
                <InputField 
                    placeholder={placeholder}
                    onChange={(e) =>setName(e.currentTarget.value)}
                    onFocus={() => setIsSubmitted(false)}
                    
                />
                <Button onClick={() => setIsSubmitted(true)}>
                    Submit
                </Button>
            </div>
            <div>
                {isSubmitted ? <h1>{resultText}{name}</h1> : <div/>}
            </div>
        </div>
    )
};
