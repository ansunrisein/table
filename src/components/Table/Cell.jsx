import React from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox'
import c from 'classnames'
import {Rating} from './Rating'
import styles from './Table.module.css'


export const Cell = ({text, horizontal, rating, size, reverse}) => (
    <Flex flexDirection={horizontal ? 'row' : 'column'} alignItems="center" justifyContent="center">
        {text &&
        <span className={c(styles.medium, styles.gray, size === 'tiny' && styles.small)}>{text}</span>}
        <Rating rating={rating} size={size} reverse={reverse}/>
    </Flex>
)

Rating.propTypes = {
    size: PropTypes.oneOf(['tiny', 'medium', 'big']).isRequired,
    text: PropTypes.string,
    rating: PropTypes.string.isRequired,
    horizontal: PropTypes.bool,
}