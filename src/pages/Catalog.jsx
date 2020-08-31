import React, {useEffect, useState} from 'react'
import {Auth, Form, ProductsTable} from '../components'
import {withFirebaseAuthConsumer} from '../hocs'
import {useMedia} from 'react-use'


export const Catalog = withFirebaseAuthConsumer(({isSignedIn}) => {
    const [visible, setVisible] = useState(false)
    const [authed, setAuth] = useState(false)

    const isDesktop = useMedia('(min-width: 768px)')

    useEffect(() => setAuth(isSignedIn), [setAuth, isSignedIn])

    if (isDesktop)
        return (
            <>
                {isSignedIn && visible && <Form showForm={setVisible}/>}
                <ProductsTable/>
                <Auth showForm={setVisible} setAuth={setAuth} authed={authed}/>
            </>
        )

    if (isSignedIn && visible)
        return <Form showForm={setVisible}/>

    return (
        <>
            <ProductsTable/>
            <Auth showForm={setVisible} setAuth={setAuth} authed={authed}/>
        </>
    )

})