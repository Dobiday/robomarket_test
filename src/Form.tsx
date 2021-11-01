import React, { useMemo } from 'react';
import {
    TextInput,
    NumberInput,
    Dropdown,
    Checkbox,
    GroupCheckbox, CheckboxProps,
} from './Components';

import styles from './style.scss';

type IInput = {
    type: string,
    label?: string,
    placeholder?: string,
    value?: string
}

type ITextInput = IInput

type INumberInput = {
    min?: string,
    max?: string
} & IInput

type IDropdown = {
    type: string,
    values?: Array<string>,
    defaultSelected?: string,
    label?: string
}

type ICheckbox = {
    type: string,
    defaultChecked?: boolean,
    label?: string,
}

type ICheckboxGroup = {
    type: string,
    values?: Array<CheckboxProps>,
    title?: string
}

type FromProps = {
    formContent: Array<ITextInput | INumberInput | IDropdown | ICheckbox | ICheckboxGroup>
}

const Form: React.FC<FromProps> = ({ formContent }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted');
    }

    const checkFormComponent = (component: any) => {
        switch (component.type) {
            case "text":
                return <TextInput
                    key={component.label}
                    labelProp={component.label}
                    placeholderProp={component.placeholder}
                    valueProp={component.value}
                />;
            case "number":
                return <NumberInput
                    key={component.label}
                    valueProp={component.value}
                    labelProp={component.label}
                    placeholderProp={component.placeholder}
                    minProp={component.min}
                    maxProp={component.max}
                />
            case "dropdown":
                return <Dropdown
                    key={component.label}
                    values={component.values}
                    defaultSelected={component.defaultSelected}
                    labelProp={component.label}
                />
            case "checkbox":
                return <Checkbox
                    key={component.label}
                    defaultChecked={component.defaultChecked}
                    labelProp={component.label}
                />
            case "groupCheckbox":
                return <GroupCheckbox
                    key={component.title}
                    values={component.values}
                    title={component.title}
                />
        }
    };

    const content = useMemo(() => {
        return formContent.map(el => checkFormComponent(el));
    }, [formContent])

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {content}
            <input className={styles.submitButton} type="submit" value={"Отправить"}/>
        </form>
    )
}

export default Form;
