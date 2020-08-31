import {ascend, descend, prop, sortWith} from 'ramda'

export const nextSort = currentSort => {
    switch (currentSort) {
        case 'asc':
            return 'desc'
        case 'desc':
            return 'none'
        default:
            return 'asc'
    }
}

export const sortData = (data, filters) => sortWith(
    filters.filter(e => e.direction !== 'none')
        .map(e => (e.direction === 'asc' ? ascend : descend)(prop(e.name))),
    data,
)