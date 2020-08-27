import React from 'react'
import PropTypes from 'prop-types'
import {UpSquareFilled} from '@ant-design/icons'
import c from 'classnames'
import {Flex} from 'reflexbox'
import styles from './Table.module.css'


export const Rating = ({size, vertical, rating, larger}) => (
    <Flex flexDirection={vertical && 'column'} alignItems="center">
        <UpSquareFilled className={size === 'big' ? styles.big : styles.tiny}/>
        <span className={c(styles.bold, larger ? styles.larger : styles.xlarge)}>{rating}</span>
    </Flex>
)

Rating.propTypes = {
    size: PropTypes.oneOf(['tiny', 'medium', 'big']).isRequired,
    vertical: PropTypes.bool,
    rating: PropTypes.string.isRequired,
    larger: PropTypes.bool,
}