import React from 'react'
import {Flex} from 'reflexbox'
import c from 'classnames'
import {Cell, ImageDisplay} from '../../../../ui'
import styles from './DesktopRow.module.css'


export const DesktopRow = ({data, onElementHover}) => (
    <Flex alignItems="stretch" className={c(data.new && styles.new)}>
        <Flex flex="1" justifyContent="center" alignItems="center" onMouseEnter={() => onElementHover?.('image')}
              className={styles.hover}
              padding="0.5rem 0"
        >
            <ImageDisplay url={data.image} className={styles.image}/>
            <Cell rating="567" size="big" text="#12327"/>
        </Flex>
        <Flex flex="1" justifyContent="center" alignItems="center" onMouseEnter={() => onElementHover?.('name')}
              className={styles.hover}>
            <Cell text={data.name} rating="23"/>
        </Flex>
        <Flex flex="1" justifyContent="center" alignItems="center" onMouseEnter={() => onElementHover?.('brand')}
              className={styles.hover}>
            <Cell text={data.brand} rating="23"/>
        </Flex>
        <Flex flex="1" justifyContent="center" alignItems="center" onMouseEnter={() => onElementHover?.('price')}
              className={styles.hover}>
            <Cell text={data.price} rating="23"/>
        </Flex>
        <Flex flex="1" justifyContent="center" alignItems="center" onMouseEnter={() => onElementHover?.('uniqueness')}
              className={styles.hover}>
            <Cell text={data.uniqueness} rating="23"/>
        </Flex>
        <Flex flex="1" justifyContent="center" alignItems="center" onMouseEnter={() => onElementHover?.('longevity')}
              className={styles.hover}>
            <Cell text={data.longevity} rating="23"/>
        </Flex>
        <Flex flex="1" justifyContent="center" alignItems="center" onMouseEnter={() => onElementHover?.('ingredients')}
              className={styles.hover}>
            <Cell rating="23" horizontal>
                <span className={styles.ingredients}>{data.ingredients}</span>
            </Cell>
        </Flex>
    </Flex>
)