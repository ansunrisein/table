import React from 'react'
import * as firebase from 'firebase/app'
import 'firebase/database'
import {FirebaseDatabaseProvider} from '@react-firebase/database'
import {config} from './config'
import {Main} from './pages'
import {Auth} from './components/Auth'


export const App = () => (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
        <Auth/>
        <Main/>
    </FirebaseDatabaseProvider>
)
