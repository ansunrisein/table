import React, {useEffect, useState} from 'react'
import {Auth, Form, ProductsTable} from '../components'
import {withFirebaseAuthConsumer} from '../hocs'


export const Catalog = withFirebaseAuthConsumer(({isSignedIn}) => {
    const [visible, setVisible] = useState(false)
    const [authed, setAuth] = useState(false)

    useEffect(() => setAuth(isSignedIn), [setAuth, isSignedIn])

    return (
        <>
            {isSignedIn && visible && <Form showForm={setVisible}/>}
            <ProductsTable/>
            <Auth showForm={setVisible} setAuth={setAuth} authed={authed}/>
        </>
    )
})