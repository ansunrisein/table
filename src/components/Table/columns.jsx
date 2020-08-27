import React from 'react'
import {Title} from './Title'
import {Cell} from './Cell'

export const columns = [
    {
        title: () => <Title text="Image" sort="none"/>,
        dataIndex: 'image',
        key: 'image',
        width: '20%',
        render: url => <Cell horizontal image={url} rating={567} size="big"/>
    },
    {
        title: () => <Title text="Name" sort="desc"/>,
        dataIndex: 'name',
        key: 'name',
        render: name => <Cell rating="25" size="big" text={name}/>
    },
    {
        title: () => <Title text="Brand" sort="asc"/>,
        dataIndex: 'brand',
        key: 'brand',
        render: brand => <Cell rating="25" size="big" text={brand}/>
    },
    {
        title: () => <Title text="Price" sort="none"/>,
        dataIndex: 'price',
        key: 'price',
        render: price => <Cell rating="25" size="big" text={price}/>
    },
    {
        title: () => <Title text="Uniqueness" sort="none"/>,
        dataIndex: 'uniq',
        key: 'uniq',
        render: uniq => <Cell rating="25" size="big" text={uniq}/>
    },
    {
        title: () => <Title text="Longevity" sort="none"/>,
        dataIndex: 'long',
        key: 'long',
        render: long => <Cell rating="25" size="big" text={long}/>
    },
    {
        title: () => <Title text="Ingredients" sort="none"/>,
        dataIndex: 'ingredient',
        key: 'ingredient',
        render: ingredient => <Cell horizontal rating="25" size="small" text={ingredient}/>
    },
]