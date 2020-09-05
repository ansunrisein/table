import React from 'react'
import {Box, Flex} from 'reflexbox'
import c from 'classnames'
import {Cell, ImageDisplay} from '../../../../ui'
import styles from './MobileRow.module.css'


export const MobileRow = ({data}) => (
    <Flex alignItems="center" className={c(styles.card, data.new && styles.new)}>
        <Flex minWidth="auto" flexWrap="nowrap" flexDirection="column" marginRight="1rem">
            <ImageDisplay url={data.image}/>
        </Flex>
        <Flex flex="1" justifyContent="center">
            <Flex flex="1" flexDirection="column">
                <Box flex="1" className={styles.item}>
                    <Cell text={data.name} rating="23"/>
                </Box>
                <Box flex="1" className={styles.item}>
                    <Cell text={data.brand} rating="23"/>
                </Box>
            </Flex>
        </Flex>
        <Box flex="1">
            <Box flex="1" className={styles.item}>
                <Cell text={data.price} rating="23"/>
            </Box>
            <Box flex="1" className={styles.item}>
                <Cell text={data.uniqueness} rating="23"/>
            </Box>
        </Box>
        <Box flex="1">
            <Box flex="1" className={styles.item}>
                <Cell text={data.longevity} rating="23"/>
            </Box>
            <Box flex="1" className={styles.item}>
                <Cell rating="23" text={data.ingredients}/>
            </Box>
        </Box>
    </Flex>
)
