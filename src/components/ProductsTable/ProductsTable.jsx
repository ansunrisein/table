import React, {useMemo, useState} from 'react'
import {useMedia} from 'react-use'
import {Pagination, Spin} from 'antd'
import {TitleRow} from './TitleRow'
import {DesktopRow} from './DesktopRow'
import {usePagination} from './usePagination'
import {useSort} from './useSort'
import {MobileRow} from './MobileRow'


export const ProductsTable = ({data, columns, pageSize, loading}) => {
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