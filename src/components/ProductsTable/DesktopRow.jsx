import React from 'react'
import {Box, Flex} from 'reflexbox'
import {Cell} from '../../ui'
import styles from '../Table/Table.module.css'


export const DesktopRow = ({data, onElementHover}) => (
    <Flex alignItems="center">
        <Flex flex="1" onMouseEnter={() => onElementHover?.('image')} >
            <div className={styles.image}>
                <div role="img" style={{backgroundImage: `url(${data.image})`}} className={styles.background}/>
            </div>
            <Cell rating="567" size="big" text="#12327" />
        </Flex>
        <Box flex="1" onMouseEnter={() => onElementHover?.('name')}>
            <Cell text={data.name} rating="23" />
        </Box>
        <Box flex="1" onMouseEnter={() => onElementHover?.('brand')}>
            <Cell text={data.brand} rating="23" />
        </Box>
        <Box flex="1" onMouseEnter={() => onElementHover?.('price')}>
            <Cell text={data.price} rating="23" />
        </Box>
        <Box flex="1" onMouseEnter={() => onElementHover?.('uniqueness')}>
            <Cell text={data.uniqueness} rating="23" />
        </Box>
        <Box flex="1" onMouseEnter={() => onElementHover?.('longevity')}>
            <Cell text={data.longevity} rating="23" />
        </Box>
        <Box flex="1" onMouseEnter={() => onElementHover?.('ingredients')}>
            <Cell rating="23" horizontal>
                <span className={styles.ingredients}>{data.ingredients}</span>
            </Cell>
        </Box>
    </Flex>
)