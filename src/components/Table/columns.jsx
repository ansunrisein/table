import React from 'react'
import {Flex} from 'reflexbox'
import {Title} from './Title'
import {Cell} from './Cell'
import styles from './Table.module.css'


export const createColumns = (filters, onClick, onMouseEnter, onMouseLeave) => {
    const findDirection = name => filters.find(e => e.name === name)?.direction || 'none'


    return ([
        {
            title: (_, __, i) => <Title onClick={() => onClick?.('image')} text="Image" sort={findDirection('image')}
                                onMouseEnter={() => onMouseEnter({i, j: 0})}
                                onMouseLeave={onMouseLeave}
            />,
            dataIndex: 'image',
            key: 'image',
            render: (url, _, i) => (
                <Flex marginTop="0.5rem"
                      onMouseEnter={() => onMouseEnter({i, j: 0})}
                      onMouseLeave={onMouseLeave}
                >
                    <div className={styles.image}>
                        <div role="img" style={{backgroundImage: `url(${url})`}} className={styles.background}/>
                    </div>
                    <Cell rating="567" size="big" text="#12327" sort={findDirection('image')}/>
                </Flex>
            )
        },
        {
            title: (_, __, i) => <Title onClick={() => onClick?.('name')} text="Name" sort={findDirection('name')}
                                onMouseEnter={() => onMouseEnter({i, j: 1})}
                                onMouseLeave={onMouseLeave}
            />,
            dataIndex: 'name',
            key: 'name',
            render: (name, _, i) => <Cell rating="25" size="big" text={name}
                                  onMouseEnter={() => onMouseEnter({i, j: 1})}
                                  onMouseLeave={onMouseLeave}
            />
        },
        {
            title: (_, __, i) => <Title onClick={() => onClick?.('brand')} text="Brand" sort={findDirection('brand')}
                                onMouseEnter={() => onMouseEnter({i, j: 2})}
                                onMouseLeave={onMouseLeave}
            />,
            dataIndex: 'brand',
            key: 'brand',
            render: (brand, _, i) => <Cell rating="25" size="big" text={brand}
                                   onMouseEnter={() => onMouseEnter({i, j: 2})}
                                   onMouseLeave={onMouseLeave}
            />
        },
        {
            title: (_, __, i) => <Title onClick={() => onClick?.('price')} text="Price" sort={findDirection('price')}
                                onMouseEnter={() => onMouseEnter({i, j: 3})}
                                onMouseLeave={onMouseLeave}
            />,
            dataIndex: 'price',
            key: 'price',
            render: (price, _, i) => <Cell rating="25" size="big" text={price}
                                   onMouseEnter={() => onMouseEnter({i, j: 3})}
                                   onMouseLeave={onMouseLeave}
            />
        },
        {
            title: (_, __, i) => <Title onClick={() => onClick?.('uniqueness')} text="Uniqueness"
                                sort={findDirection('uniqueness')}
                                onMouseEnter={() => onMouseEnter({i, j: 4})}
                                onMouseLeave={onMouseLeave}
            />,
            dataIndex: 'uniqueness',
            key: 'uniqueness',
            render: (uniq, _, i) => <Cell rating="25" size="big" text={uniq}
                                  onMouseEnter={() => onMouseEnter({i, j: 4})}
                                  onMouseLeave={onMouseLeave}
            />
        },
        {
            title: (_, __, i) => <Title onClick={() => onClick?.('longevity')} text="Longevity"
                                sort={findDirection('longevity')}
                                onMouseEnter={() => onMouseEnter({i, j: 5})}
                                onMouseLeave={onMouseLeave}
            />,
            dataIndex: 'longevity',
            key: 'longevity',
            render: (long, _, i) => <Cell rating="25" size="big" text={long}
                                  onMouseEnter={() => onMouseEnter({i, j: 5})}
                                  onMouseLeave={onMouseLeave}
            />
        },
        {
            title: (_, __, i) => <Title onClick={() => onClick?.('ingredients')} text="Ingredients"
                                sort={findDirection('ingredients')}
                                onMouseEnter={() => onMouseEnter({i, j: 6})}
                                onMouseLeave={onMouseLeave}
            />,
            dataIndex: 'ingredients',
            key: 'ingredients',
            render: (ingredients, _, i) => <Cell horizontal rating="25" size="tiny"
                                        onMouseEnter={() => onMouseEnter({i, j: 6})}
                                        onMouseLeave={onMouseLeave}
            >
                <span className={styles.ingredients}>{ingredients}</span>
            </Cell>
        },
    ])
}