import React from 'react'

export const createHoc = Consumer => consumerProps => Component => componentProps => (
    <Consumer {...consumerProps}>{consumerResult => (
        <Component {...consumerResult} {...componentProps}/>
    )}</Consumer>
)