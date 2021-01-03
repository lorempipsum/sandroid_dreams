import React from "react";
import styles from './StateVariables.module.css';

const StateVariables = ({variables}) => {

    const codeSnippet = (key, value) => {
        return (
            <><code>{key}: {value}</code>
                {
                    "\n"
                }</>)
    };

    let variableArray = [];

    if (variables) {

        for (const [key, value] of Object.entries(variables)) {
            variableArray.push(codeSnippet(key, value));
        }
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.codeBox}>
                <pre><span>State variables:</span>{"\n"}{"\n"}
                    {variableArray.map((e, i) => variableArray[i]
                    )
                    }</pre>
            </div>
        </div>
    )
}

export default StateVariables;