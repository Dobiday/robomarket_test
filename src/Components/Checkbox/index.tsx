import React, { useState } from "react";

import styles from './styles.scss';

export type CheckboxProps = {
    defaultChecked?: boolean,
    labelProp?: string,
}

const Checkbox: React.FC<CheckboxProps> = ({
    defaultChecked = false,
    labelProp = "",
}) => {
    const [checked, setChecked] = useState(defaultChecked);

    const handleChange = () => setChecked(prevState => !prevState);

    return (
        <div className={styles.wrapper}>
            {labelProp ? (
                <label className={styles.label} htmlFor={labelProp}>
                    {labelProp}
                </label>
            ) : null}
            <input
                className={styles.checkbox}
                id={labelProp}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
        </div>
    )
}

export default Checkbox;
