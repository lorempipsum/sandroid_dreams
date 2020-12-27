import React from 'react';
import Title from './Title';
import styles from './Layout.module.css';


const Layout = ({children, title}) => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.header}>
                    <Title
                        title={'sandroid.dev'}
                    />
                </div>
                <div className={styles.content}>
                    {title && <h1>{title}</h1>}
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
