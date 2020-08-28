import React from 'react'
import {Auth, Form, Table} from '../components'
import {FirebaseAuthConsumer} from '@react-firebase/auth'


export const Catalog = () => (
    <>
        <FirebaseAuthConsumer>{({isSignedIn}) => (
            isSignedIn && <Form/>
        )}</FirebaseAuthConsumer>
        <Table/>
        <Auth/>
    </>
)