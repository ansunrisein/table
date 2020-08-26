import React from 'react'
import firebase from 'firebase'
import {FirebaseAuthProvider} from '@react-firebase/auth'
import {config} from '../../config'
import {Button} from 'antd'
import styles from './Auth.module.css'


export const Auth = () => {
    return (
        <FirebaseAuthProvider {...config} firebase={firebase}>
            <div className={styles.container}>
                <Button onClick={() => {
                    const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
                    firebase.auth().signInWithPopup(googleAuthProvider)
                }}>
                    Sign In with Google
                </Button>
            </div>
        </FirebaseAuthProvider>
    )
}