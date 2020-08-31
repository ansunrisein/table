import React, {useCallback, useState} from 'react'
import {Box, Flex} from 'reflexbox'
import {DownOutlined, FilterFilled, UpOutlined} from '@ant-design/icons'
import c from 'classnames'
import styles from './TitleMobileRow.module.css'


export const TitleMobileRow = ({columns, onClick}) => {
    const [showed, setShow] = useState(false)
    const [current, setCurrent] = useState('image')

    const toggle = useCallback(() => showed ? setShow(false) : setShow(true), [setShow, showed])
    const sort = useCallback(key => {
        setCurrent(key)
        onClick(key)
        setShow(false)
    }, [setCurrent, setShow, onClick])

    return (
        <header className={styles.header}>
            <Flex onClick={toggle} alignItems="center" justifyContent="space-between" padding="0.5rem 1rem">
                <div>
                    <span> <FilterFilled/> Sort By: </span>
                    <span className={c(styles.text, styles.current)}>{current}</span>
                </div>
                {showed ? <UpOutlined/> : <DownOutlined/>}
            </Flex>
            <Box as="ul" flexDirection="column" alignItems="center"
                 className={c(showed ? styles.showed : styles.hidden, styles.list)}>{
                columns.map((e, i) => (
                    <Flex as="li" key={i} width="100%" justifyContent="center" className={styles.hover}>
                        <Flex justifyContent="flex-start" onClick={() => sort(e)} className={styles.item}>
                            <span className={c(styles.text, styles.sort)}>{e}</span>
                        </Flex>
                    </Flex>
                ))
            }</Box>
        </header>
    )
}