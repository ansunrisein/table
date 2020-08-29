import React, {useState} from 'react'
import {FirebaseAuthConsumer} from '@react-firebase/auth'
import {Auth, Form, Table} from '../components'


export const Catalog = () => {
    const [visible, setVisible] = useState(false)
    const [authed, setAuth] = useState(false)

    return (
        <>
            <FirebaseAuthConsumer>{({isSignedIn}) => {
                setAuth(isSignedIn)
                return isSignedIn && visible && <Form showForm={setVisible}/>
            }}</FirebaseAuthConsumer>
            <Table/>
            <Auth showForm={setVisible} setAuth={setAuth} authed={authed}/>
        </>
    )
}