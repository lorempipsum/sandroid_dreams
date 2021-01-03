import React from "react";

import styles from './Button.module.css';

const Button = ({id, onClick, label}) => {
    return <button className={styles.flexButton} onClick={onClick} id={id}>{label}
    </button>
}

export default Button;