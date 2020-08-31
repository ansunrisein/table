import {useMemo, useState} from 'react'

export const usePagination = ({data, pageSize}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const page = useMemo(() => {
        return data?.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
        )
    }, [data, pageSize, currentPage])

    return {
        go: setCurrentPage,
        page,
        currentPage
    }
}