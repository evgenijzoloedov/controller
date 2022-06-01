import React from 'react';
import styles from './Wrapper.module.css'
export const Wrapper = ({children}) => {



    return (
        <main className={styles.wrapper}>
            {children}
        </main>
    );
};

