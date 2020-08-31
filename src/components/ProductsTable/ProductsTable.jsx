import React, {useMemo, useState} from 'react'
import {useMedia} from 'react-use'
import {Pagination, Spin} from 'antd'
import c from 'classnames'
import {withFirebaseDatabaseNode} from '../../hocs'
import {usePagination, useSort} from './hooks'
import {s} from '../../utils'
import {DesktopRow, MobileRow, TitleRow} from './ui'


const withDatabaseNode = withFirebaseDatabaseNode({path: 'ScentHunt/products'})

const columns = ['image', 'name', 'brand', 'price', 'uniqueness', 'longevity', 'ingredients']
const pageSize = 10

export const ProductsTable = withDatabaseNode(({value, isLoading}) => {
    const data = useMemo(() => value && s(value), [s, value])
    const {sortBy, sortedItems, sorts} = useSort(data || [])
    const {go, page, currentPage} = usePagination({data: sortedItems, pageSize})
    const [hover, setHover] = useState(null)

    const isDesktop = useMedia('(min-width: 768px)')
    const Item = useMemo(() => (isDesktop ? DesktopRow : MobileRow), [isDesktop])

    return (
        <div>
            {/*<TitleRow columns={columns} onClick={sortBy} sorts={sorts} hovered={hover}/>*/}
            <div onMouseLeave={() => setHover(null)}>{
                loading || !page
                ? <Spin/>
                : (
                    <ul>
                        {page.map((datum) => (
                            <li key={'key' + datum.id}>
                                <Item data={datum} onElementHover={setHover}/>
                            </li>
                        ))}
                    </ul>
                )
            }</div>
            {/*<Pagination total={data?.length} current={currentPage} onChange={go}/>*/}
        </div>
    )
}