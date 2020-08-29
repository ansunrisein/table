import React from 'react'
import c from 'classnames'
import styles from './Disclaimer.module.css'


export const Disclaimer = ({className, ...props}) => (
    <span className={c(styles.text, className)} {...props}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
        form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use
        a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
    </span>
)