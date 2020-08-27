import React from 'react'
import {Title} from './Title'
import {Cell} from './Cell'

export const createColumns = (filters, onClick) => {
    const findDirection = name => filters.find(e => e.name === name)?.direction || 'none'

    return ([
        {
            title: () => <Title onClick={() => onClick?.('image')} text="Image" sort={findDirection('image')}/>,
            dataIndex: 'image',
            key: 'image',
            width: '20%',
            render: url => <Cell horizontal image={url} rating="567" size="big" sort={findDirection('image')}/>
        },
        {
            title: () => <Title onClick={() => onClick?.('name')} text="Name" sort={findDirection('name')}/>,
            dataIndex: 'name',
            key: 'name',
            render: name => <Cell rating="25" size="big" text={name}/>
        },
        {
            title: () => <Title onClick={() => onClick?.('brand')} text="Brand" sort={findDirection('brand')}/>,
            dataIndex: 'brand',
            key: 'brand',
            render: brand => <Cell rating="25" size="big" text={brand}/>
        },
        {
            title: () => <Title onClick={() => onClick?.('price')} text="Price" sort={findDirection('price')}/>,
            dataIndex: 'price',
            key: 'price',
            render: price => <Cell rating="25" size="big" text={price}/>
        },
        {
            title: () => <Title onClick={() => onClick?.('uniqueness')} text="Uniqueness" sort={findDirection('uniqueness')}/>,
            dataIndex: 'uniqueness',
            key: 'uniqueness',
            render: uniq => <Cell rating="25" size="big" text={uniq}/>
        },
        {
            title: () => <Title onClick={() => onClick?.('longevity')} text="Longevity" sort={findDirection('longevity')}/>,
            dataIndex: 'longevity',
            key: 'longevity',
            render: long => <Cell rating="25" size="big" text={long}/>
        },
        {
            title: () => <Title onClick={() => onClick?.('ingredients')} text="Ingredients" sort={findDirection('ingredients')}/>,
            dataIndex: 'ingredients',
            key: 'ingredients',
            render: ingredient => <Cell horizontal rating="25" size="tiny" text={ingredient}/>
        },
    ])
}