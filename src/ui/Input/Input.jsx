import React, {forwardRef} from 'react'
import c from 'classnames'
import styles from './Input.module.css'


export const Input = forwardRef(({className, ...props}, ref) => (
    <input className={c(styles.input, className)} {...props} ref={ref}/>
))