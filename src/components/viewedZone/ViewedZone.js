import React from 'react';
import styles from './ViewedZone.module.css'
import {useChat} from "../../hooks/useChat";


function Box({
                 data,
                 text
             }) {
    return (
        <div className={styles.box}>
            <p>
                {text}:&nbsp;
                <strong>
                    {Number(data).toFixed(2)}
                </strong>
            </p>

        </div>
    )
}


export const ViewedZone = () => {



    const info = useChat()

    return (
        <section className={styles.zone}>

            <Box data={info.static} text={"Статическая камера"}/>
            <Box data={info.car} text={"Динамическая камера"}/>

        </section>
    );
};

