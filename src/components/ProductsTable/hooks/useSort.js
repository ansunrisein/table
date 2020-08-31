import {useCallback, useMemo, useState} from 'react'
import {ascend, descend, prop, sortWith} from 'ramda'


export const useSort = items => {
    const [sorts, setSorts] = useState([])

    const sortedItems = useMemo(() => sortData(items, sorts), [items, sorts])

    const sortBy = useCallback(name => setSorts(sorts => {
            const sort = sorts.find(e => e.name === name)

            if (!sort)
                return sorts.concat({name, direction: nextSort()})

            return sorts.map(e => e.name !== name ? e : ({
                name,
                direction: nextSort(e.direction)
            }))
        }), [setSorts]
    )

    return {
        sortedItems,
        sortBy,
        sorts,
    }
}


const nextSort = currentSort => {
    switch (currentSort) {
        case 'asc':
            return 'desc'
        case 'desc':
            return 'none'
        default:
            return 'asc'
    }
}

const sortData = (data, filters) => sortWith(
    filters.filter(e => e.direction !== 'none')
        .map(e => (e.direction === 'asc' ? ascend : descend)(prop(e.name))),
    data,
)