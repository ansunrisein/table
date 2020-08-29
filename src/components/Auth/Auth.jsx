import React from 'react'
import * as firebase from 'firebase'
import {ArrowDownOutlined} from '@ant-design/icons'
import styles from './Auth.module.css'


export const Auth = ({showForm, setAuth, authed}) => {
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => {
                if(!authed) {
                    const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
                    firebase.auth().signInWithPopup(googleAuthProvider)
                    setAuth(true)
                }

                showForm(true)
            }}>
                    <span className={styles.text}>
                        Login
                        <ArrowDownOutlined style={{marginTop: '4px'}}/>
                    </span>
            </button>
        </div>
    )
}