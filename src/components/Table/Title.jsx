import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox'
import c from 'classnames'
import {DownOutlined, UpOutlined} from '@ant-design/icons'
import styles from './Table.module.css'


export const Title = ({text, sort, onClick}) => {
    const style = useMemo(() => ({
        height: sort === 'none' ? '0.5em' : '1em',
    }), [sort])

    return (
        <Flex justifyContent="center" className={styles.head}>
            <Flex flexDirection="column"
                  justifyContent={sort !== 'none' && 'center'}
                  className={c(styles.icon, styles.pointer)}
                  onClick={onClick}
            >
                {(sort === 'asc' || sort === 'none') && <UpOutlined style={style}/>}
                {(sort === 'desc' || sort === 'none') && <DownOutlined style={style}/>}
            </Flex>
            <span className={c(styles.uppercase, styles.pointer, styles.title, styles.bold)} onClick={onClick}>{text}</span>
        </Flex>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
    sort: PropTypes.oneOf(['asc', 'none', 'desc']),
    onClick: PropTypes.func,
}