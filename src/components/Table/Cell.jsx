import React from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox'
import c from 'classnames'
import {Rating} from './Rating'
import styles from './Table.module.css'


export const Cell = ({text, image, horizontal, rating, size}) => (
    <Flex flexDirection={horizontal ? "row" : "column"} alignItems="center" justifyContent="center">
        {text && <span className={c(styles.text, !horizontal && styles.margin, size === 'small' && styles.larger)}>{text}</span>}
        {image &&  <img className={styles.image} src={image} alt="Image"/>}
        <Rating rating={rating} size={size} vertical={!!image} larger={!!image || size === 'small'}/>
    </Flex>
)

Rating.propTypes = {
    size: PropTypes.oneOf(['tiny', 'medium', 'big']).isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    image: PropTypes.string,
    horizontal: PropTypes.bool,
}