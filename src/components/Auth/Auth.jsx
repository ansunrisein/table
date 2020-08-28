import React from 'react'
import firebase from 'firebase'
import {FirebaseAuthProvider} from '@react-firebase/auth'
import {ArrowDownOutlined} from '@ant-design/icons'
import {config} from '../../config'
import styles from './Auth.module.css'


export const Auth = () => {
    return (
        <FirebaseAuthProvider {...config} firebase={firebase}>
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
        </FirebaseAuthProvider>
    )
}