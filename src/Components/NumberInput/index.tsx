import React, { useState, useMemo } from "react";

import styles from './styles.scss';

export type NumberInputProps = {
    valueProp?: string,
    placeholderProp?: string,
    labelProp?: string,
    minProp?: number,
    maxProp?: number
}

const NumberInput: React.FC<NumberInputProps> = ({
    valueProp = "",
    placeholderProp = "",
    labelProp = "",
    minProp = 0,
    maxProp
}) => {
    const [value, setValue] = useState(valueProp);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const numberProps = useMemo(() => {
        const prop: {
            max?: number
        } = {};
        if (maxProp) {
            prop.max = maxProp;
        }
        return prop;
    }, [maxProp]);

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
                type="number"
                value={value}
                placeholder={placeholderProp}
                onChange={handleChange}
                min={minProp}
                {...numberProps}
            />
        </div>
    )
}

export default NumberInput;
