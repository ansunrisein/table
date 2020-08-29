import React from 'react'
import c from 'classnames'
import styles from './Button.module.css'


export const Button = ({children, className, ...props}) => (
    <button className={c(styles.button, className)} {...props}>
        {children}
    </button>
)
