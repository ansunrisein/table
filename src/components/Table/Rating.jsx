import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {inc} from 'ramda'
import {UpSquareFilled} from '@ant-design/icons'
import c from 'classnames'
import {Flex} from 'reflexbox'
import styles from './Table.module.css'


export const Rating = ({size, vertical, rating, larger}) => {
    const [rate, setRate] = useState(rating)

    return (
        <Flex flexDirection={vertical && 'column'} alignItems="center">
            <button className={styles.defaultButton}>
                <UpSquareFilled className={c(size === 'big' ? styles.big : styles.tiny, styles.pointer)}
                                onClick={() => setRate(inc)}
                />
            </button>
            <span className={c(styles.bold, larger ? styles.larger : styles.xlarge, styles.selection)}>{rate}</span>
        </Flex>
    )
}

Rating.propTypes = {
    size: PropTypes.oneOf(['tiny', 'medium', 'big']).isRequired,
    vertical: PropTypes.bool,
    rating: PropTypes.string.isRequired,
    larger: PropTypes.bool,
}