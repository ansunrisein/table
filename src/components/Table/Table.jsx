import React from 'react'
import {FirebaseDatabaseNode} from '@react-firebase/database'
import {Table as AntTable} from 'antd'
import {columns} from './columns'
import styles from './Table.module.css'


export const Table = () => {
    const path = 'ScentHunt/products'

    const s = obj => Object.keys(obj).reduce((acc, key) => [...acc, {id: key, ...obj[key]}], [])

    return (
        <FirebaseDatabaseNode path={path} orderByKey>{d => (
            <AntTable loading={d.isLoading} dataSource={d.value && s(d.value)} columns={columns}/>
        )}</FirebaseDatabaseNode>
    )
}