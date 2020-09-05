import React from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox'
import c from 'classnames'
import {Rating} from '../Rating'
import styles from './Cell.module.css'


export const Cell = ({text, horizontal, rating, size, children, onMouseEnter, onMouseLeave, hovered, center}) => (
    <Flex flexDirection={horizontal ? 'row' : 'column'} alignItems="center" justifyContent="center"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={c(hovered && styles.hovered, !center && styles.mobile)}
    >
        {text &&
        <span className={c(styles.medium, styles.gray, size === 'tiny' && styles.small, styles.ellipsis)}>{text}</span>}
        {children}
        <Rating rating={rating} size={size}/>
    </Flex>
)

Rating.propTypes = {
    size: PropTypes.oneOf(['tiny', 'medium', 'big']).isRequired,
    text: PropTypes.string,
    rating: PropTypes.string.isRequired,
    horizontal: PropTypes.bool,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
}