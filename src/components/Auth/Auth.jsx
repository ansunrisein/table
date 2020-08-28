import React from 'react'
import * as firebase from 'firebase'
import {ArrowDownOutlined} from '@ant-design/icons'
import styles from './Auth.module.css'


export const Auth = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => {
                const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
                firebase.auth().signInWithPopup(googleAuthProvider)
            }}>
                    <span className={styles.text}>
                        Login
                        <ArrowDownOutlined style={{marginTop: '4px'}}/>
                    </span>
            </button>
        </div>
    )
}