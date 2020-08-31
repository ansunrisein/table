import React from 'react'
import {Box, Flex} from 'reflexbox'
import {Title} from '../../ui'


export const TitleRow = ({columns, sorts, onClick, hovered}) => {
    const findDirection = name => sorts.find(e => e.name === name)?.direction || 'none'

    return (
        <Flex>{
            columns.map((e, i) => (
                <Box key={i} flex="1">
                    <Title text={e} sort={findDirection(e)} onClick={() => onClick(e)} hovered={hovered === e}/>
                </Box>
            ))
        }</Flex>
    )
}