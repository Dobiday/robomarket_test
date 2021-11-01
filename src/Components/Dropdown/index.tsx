import React, { useState, useMemo } from "react";

import styles from './styles.scss';

export type DropdownProps = {
    values: Array<string>,
    defaultSelected?: string,
    labelProp: string
}

const Dropdown: React.FC<DropdownProps> = ({
    values = [],
    defaultSelected = "",
    labelProp = ""
}) => {
    const [selected, setSelected] = useState(defaultSelected)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelected(e.target.value);

    const options = useMemo(() => {
        return values.map((el: string) => (
            <option key={el} value={el} >{el}</option>
        ))
    }, [values])

    return (
        <div className={styles.wrapper}>
            {labelProp ? (
                <label className={styles.label} htmlFor={labelProp}>
                    {labelProp}
                </label>
            ) : null}
            <select className={styles.dropdown} value={selected} onChange={handleChange}>
                {options}
            </select>
        </div>
    )
}

export default Dropdown;
