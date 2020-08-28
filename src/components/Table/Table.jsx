import React, {useCallback, useMemo, useState} from 'react'
import {ascend, descend, prop, sortWith} from 'ramda'
import {Table as AntTable} from 'antd'
import {withFirebaseDatabaseNode} from '../../hocs'
import {createColumns} from './columns'
import {TableContainer} from './TableContainer'


const withDatabaseNode = withFirebaseDatabaseNode({path: "ScentHunt/products"})


export const Table = withDatabaseNode(({isLoading, value}) => {
    const [filters, setFilters] = useState([])
    const [hover, setHover] = useState(null)

    const onClick = useCallback(name => setFilters(filters => {
            const filter = filters.find(e => e.name === name)

            if (!filter)
                return filters.concat({name, direction: nextSort()})

            return filters.map(e => e.name !== name ? e : ({
                name,
                direction: nextSort(e.direction)
            }))
        }), [setFilters]
    )

    const columns = useMemo(() => (
        createColumns(filters, onClick, setHover, () => setHover(null))
    ), [filters, onClick, setHover, hover])

    const sortedDate = useMemo(() => !isLoading && value && sortData(s(value), filters), [isLoading, value, filters])

    return (
        <TableContainer hovered={hover}>
            <AntTable loading={isLoading}
                      dataSource={value && sortedDate}
                      columns={columns}
                      rowKey={e => 'key' + e.id}
            />
        </TableContainer>
    )
})

const s = obj => Object.keys(obj).reduce((acc, key) => [...acc, {id: key, ...obj[key]}], [])

const nextSort = currentSort => {
    switch (currentSort) {
        case 'asc':
            return 'desc'
        case 'desc':
            return 'none'
        default:
            return 'asc'
    }
}

const sortData = (data, filters) => sortWith(
    filters.filter(e => e.direction !== 'none')
        .map(e => (e.direction === 'asc' ? ascend : descend)(prop(e.name))),
    data,
)