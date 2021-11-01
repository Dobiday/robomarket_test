import React, { useState } from "react";

import styles from './styles.scss';

export type TextInputProps = {
    valueProp?: string,
    placeholderProp?: string,
    labelProp?: string,
}

const TextInput: React.FC<TextInputProps> = ({
    valueProp = "",
    placeholderProp = "",
    labelProp = ""
}) => {
    const [value, setValue] = useState(valueProp);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <div className={styles.wrapper}>
            {labelProp ? (
                <label className={styles.label} htmlFor={labelProp}>
                    {labelProp}
                </label>
            ) : null}
            <input
                className={styles.input}
                id={labelProp}
                type="text"
                value={value}
                placeholder={placeholderProp}
                onChange={handleChange}
            />
        </div>
    )
}

export default TextInput;
