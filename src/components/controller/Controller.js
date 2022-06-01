import React from 'react';
import styles from './Controller.module.css'
import {Button} from "../button/Button";
import {sendDirection} from "../../api";


export const Controller = () => {
    return (
        <section className={styles.wrapper}>
            <Button text={"Left"} onClick={() => {
                sendDirection('left')
            }}/>
            <div className={styles.twoBtn}>
                <Button text={"Up"} onClick={() => {
                    sendDirection('up')
                }}/>
                <Button text={"Down"} onClick={() => {
                    sendDirection('down')
                }}/>
            </div>
            <Button text={"Right"} onClick={() => {
                sendDirection('right')
            }}/>
            <Button className={styles.stop} text={"Stop"} onClick={() => {
                sendDirection('stop')
            }}/>
        </section>
    );
};

