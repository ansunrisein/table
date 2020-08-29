import React from 'react'
import c from 'classnames'

import styles from './Input.module.css'


export const Input = ({className, ...props}) => (
    <input className={c(styles.input, className)} {...props}/>
)