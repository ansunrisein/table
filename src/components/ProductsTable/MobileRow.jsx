import React from 'react'
import {Box, Flex} from 'reflexbox'
import styles from '../Table/Table.module.css'
import {Cell} from '../../ui/Cell'


export const MobileRow = ({data}) => (
    <Flex alignItems="center">
        <Flex minWidth="auto" flexWrap="nowrap" flexDirection="column">
            <div className={styles.image}>
                <div role="img" style={{backgroundImage: `url(${data.image})`}} className={styles.background}/>
            </div>
            <Cell rating="567" size="big" text="#12327"/>
        </Flex>
        <Flex flex="1" justifyContent="center">
            <Flex flex="1" flexDirection="column">
                <Box flex="1">
                    <Cell text={data.name} rating="23"/>
                </Box>
                <Box flex="1">
                    <Cell text={data.brand} rating="23"/>
                </Box>
            </Flex>
        </Flex>
        <Box flex="1">
            <Box flex="1">
                <Cell text={data.price} rating="23"/>
            </Box>
            <Box flex="1">
                <Cell text={data.uniqueness} rating="23"/>
            </Box>
        </Box>
        <Box flex="1">
            <Box flex="1">
                <Cell text={data.longevity} rating="23"/>
            </Box>
            <Box flex="1">
                <Cell rating="23" text={data.ingredients}/>
            </Box>
        </Box>
    </Flex>
)
