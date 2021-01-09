import React from "react";

import styles from "./rule30.module.css";

const Rule30OneRow = ({config}) => {
    return (<div className={styles.oneRowGridContainer}>
        {config.map((e, i) => {
                if (config[i] === 0) {
                    return <div className={`${styles.flexBox}`}/>
                }
                if (config[i] === 1) {
                    return <div className={`${styles.flexBox} + ' ' + ${styles.blackBox}`}/>
                }
                return null;
            }
        )
        }

    </div>)
}

export default Rule30OneRow;