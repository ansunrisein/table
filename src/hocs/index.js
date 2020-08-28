import React from 'react'
import {createHoc} from './createHoc'

import * as firebase from 'firebase'
import {FirebaseAuthConsumer} from '@react-firebase/auth'
import {FirebaseDatabaseMutation, FirebaseDatabaseNode} from '@react-firebase/database'
import {config} from '../config'


export const withFirebaseAuthConsumer = createHoc(FirebaseAuthConsumer)({...config, firebase: firebase})

export const withFirebaseDatabaseNode = createHoc(FirebaseDatabaseNode)

export const withFirebaseDatabaseMutation = createHoc(FirebaseDatabaseMutation)

