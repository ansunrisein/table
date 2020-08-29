import React from 'react'
import c from 'classnames'
import styles from './Logo.module.css'


export const Logo = ({className, ...props}) => (
    <div className={c(styles.logo, className)} {...props}>
        LOGO
    </div>
)