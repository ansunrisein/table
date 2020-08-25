import React from 'react'
import {FirebaseDatabaseNode} from '@react-firebase/database'
import {Table as AntTable} from 'antd'
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


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        width: '20%',
        render: (url) => <img className={styles.image} src={url} alt=""/>
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price'
    },
    {
        title: 'Uniq',
        dataIndex: 'uniq',
        key: 'uniq'
    },
    {
        title: 'Long',
        dataIndex: 'long',
        key: 'long'
    },
    {
        title: 'Ingredient',
        dataIndex: 'ingredient',
        key: 'ingredient'
    }
]