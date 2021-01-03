import React from "react";

import styles from './ButtonContainer.module.css';

const ButtonContainer = ({children}) => {
    return <div className={styles.buttonContainer}>
        {children}
    </div>
}

export default ButtonContainer;