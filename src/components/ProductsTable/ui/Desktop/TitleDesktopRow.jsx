import React from 'react'
import {Box, Flex} from 'reflexbox'
import {Title} from '../../../../ui'
import styles from './TitleDesktopRow.module.css'


export const TitleDesktopRow = ({columns, sorts, onClick, hovered}) => {
    const findDirection = name => sorts.find(e => e.name === name)?.direction || 'none'

    return (
        <Flex className={styles.background}>{
            columns.map((e, i) => (
                <Box key={i} flex="1">
                    <Title text={e === 'image' ? 'design' : e} sort={findDirection(e)} onClick={() => onClick(e)} hovered={hovered === e}/>
                </Box>
            ))
        }</Flex>
    )
}