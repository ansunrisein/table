import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {inc} from 'ramda'
import {UpSquareFilled} from '@ant-design/icons'
import c from 'classnames'
import {Flex} from 'reflexbox'
import styles from './Rating.module.css'


export const Rating = ({size, rating}) => {
    const [rate, setRate] = useState(rating)

    return (
        <Flex alignItems="center">
            <button>
                <UpSquareFilled className={c(size === 'big' ? styles.big : styles.tiny, styles.pointer)}
                                onClick={() => setRate(inc)}
                />
            </button>
            <span className={c(styles.bold, styles.selection, styles.gray, styles.ellipsis, styles.margin)}>{rate}</span>
        </Flex>
    )
}

Rating.propTypes = {
    size: PropTypes.oneOf(['tiny', 'medium', 'big']).isRequired,
    reverse: PropTypes.bool,
    rating: PropTypes.string.isRequired,
}