import React from 'react'
import * as firebase from 'firebase/app'
import 'firebase/database'
import {FirebaseDatabaseProvider} from '@react-firebase/database'
import {config} from './config'
import {Main} from './pages'


export const App = () => (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
        <Main/>
    </FirebaseDatabaseProvider>
)
