import React, { useMemo } from "react";
import Checkbox, { CheckboxProps } from "../Checkbox";

import styles from './styles.scss';


export type GroupCheckboxProps = {
    values: Array<CheckboxProps>,
    title: string
}

const GroupCheckbox: React.FC<GroupCheckboxProps> = ({
    values = [],
    title = ""
}) => {

    const checkboxes = useMemo(() => {
        return values.map((el: CheckboxProps) => {
            const { defaultChecked, labelProp } = el;
            return (
                <Checkbox
                    key={labelProp}
                    defaultChecked={defaultChecked}
                    labelProp={labelProp}
                />
            );
        })
    }, [values])

    return (
        <div className={styles.wrapper}>
            {title ? (
                <span className={styles.title}>{title}</span>
            ) : null}
            <div className={styles.content}>
                {checkboxes}
            </div>
        </div>
    )
}

export default GroupCheckbox;
