import React, {useMemo, useState} from 'react'
import {useMedia} from 'react-use'
import * as firebase from 'firebase'
import {useList} from 'react-firebase-hooks/database'
import {Button, Pagination, Spin} from 'antd'
import c from 'classnames'
import {Flex} from 'reflexbox'
import {usePagination, useSort} from './hooks'
import {moveProduct, removeProduct, snapshotToList} from '../../utils'
import {DesktopRow, MobileRow, TitleDesktopRow, TitleMobileRow} from './ui'
import styles from './ProductsTable.module.css'


const columns = ['image', 'name', 'brand', 'price', 'uniqueness', 'longevity', 'ingredients']
const pageSize = 10

export const ProductsTable = () => {
    const productsRef = useMemo(() => firebase.database().ref('ScentHunt/products'), [])
    const newProductsRef = useMemo(() => firebase.database().ref('ScentHunt/newProducts'), [])

    const [newProducts, isNewProductsLoading, error] = useList(newProductsRef)
    const [products, isProductsLoading] = useList(productsRef)
    const data = useMemo(() => snapshotToList(products), [products])
    const newData = useMemo(() => snapshotToList(newProducts), [newProducts])

    const allProducts = useMemo(
        () => [...(data || []).map(e => ({...e, new: 0})), ...(newData || []).map(e => ({...e, new: 1}))].reverse(),
        [newData, data]
    )

    const {sortBy, sortedItems, sorts} = useSort(allProducts)
    const {go, page, currentPage} = usePagination({data: sortedItems, pageSize})
    const [hover, setHover] = useState(null)

    const isDesktop = useMedia('(min-width: 768px)')
    const Item = useMemo(() => (isDesktop ? DesktopRow : MobileRow), [isDesktop])
    const Title = useMemo(() => (isDesktop ? TitleDesktopRow : TitleMobileRow), [isDesktop])

    return (
        <div className={c(styles.background, styles.size)}>
            <Title columns={columns} onClick={sortBy} sorts={sorts} hovered={hover}/>
            <div onMouseLeave={() => setHover(null)} className={styles.padding}>{
                isNewProductsLoading || isProductsLoading || !page
                    ? <Flex justifyContent="center" alignItems="center" height="30vh"><Spin size="large"/></Flex>
                    : (
                        <ul className={c(isDesktop && styles.line)}>
                            {page.map((datum) => (
                                <li key={'key' + datum.id}>
                                    <Item data={datum} onElementHover={setHover}/>
                                    {datum.new === 1 && (
                                        <>
                                            <Button type="primary" style={{marginLeft: '1rem'}}
                                                    onClick={() => moveProduct(datum)}>APPROVE</Button>
                                            <Button danger style={{marginLeft: '1rem'}}
                                                    onClick={() => removeProduct(datum)}>DELETE</Button>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )
            }</div>
            <div className={styles.pagination}>
                <Pagination total={data?.length} current={currentPage} onChange={go}/>
            </div>
        </div>
    )
}