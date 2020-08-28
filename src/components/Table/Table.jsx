import React, {useCallback, useMemo, useState} from 'react'
import {FirebaseDatabaseNode} from '@react-firebase/database'
import {ascend, descend, prop, sortWith} from 'ramda'
import {Table as AntTable} from 'antd'
import {createColumns} from './columns'
import './ant-table.css'


export const Table = () => {
    const path = 'ScentHunt/products'

    const [filters, setFilters] = useState([])
    const [data, setData] = useState({})

    const onClick = useCallback(name => setFilters(filters => {
            const filter = filters.find(e => e.name === name)

            if (!filter)
                return filters.concat({name, direction: nextSort('none')})

            return filters.map(e => e.name !== name ? e : ({
                name,
                direction: nextSort(e.direction)
            }))
        }), [setFilters]
    )

    const columns = useMemo(() => createColumns(filters, onClick), [filters, onClick])

    const sortedDate = useMemo(() => !data.isLoading && data.value && sortData(s(data.value), filters), [data, filters])

    return (
        <>
            <FirebaseDatabaseNode path={path} orderByChild="brand">{d => {
                setData(d)
                return null
            }}</FirebaseDatabaseNode>
            <AntTable loading={data.isLoading}
                      dataSource={data.value && sortedDate}
                      columns={columns}
                      className="table"
            />
        </>

    )
}

const s = obj => Object.keys(obj).reduce((acc, key) => [...acc, {id: key, ...obj[key]}], [])

const nextSort = currentSort => {
    switch (currentSort) {
        case 'asc':
            return 'desc'
        case 'desc':
            return 'none'
        case 'none':
            return 'asc'
    }
}

const sortData = (data, filters) => sortWith(
    filters.filter(e => e.direction !== 'none')
        .map(e => (e.direction === 'asc' ? ascend : descend)(prop(e.name))),
    data,
)