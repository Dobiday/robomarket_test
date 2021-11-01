import React from "react";
import Form from "./Form";
import jsonContent from "./example.json";

import styles from "./style.scss";

const content = JSON.parse(jsonContent).content;

const App = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Анкета</h1>
            {content.length ? (
                <Form formContent={content}/>
            ) : (
                <h2>Добавьте данные для заполнения анкеты</h2>
            )}
        </div>
    )
};

export default App;
