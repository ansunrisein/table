import React from 'react'
import styles from './ImageDisplay.module.css'


export const ImageDisplay = ({url}) => (
    <div className={styles.image}>
        <div role="img" style={{backgroundImage: `url(${url})`}} className={styles.background}/>
    </div>
)