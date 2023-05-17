import { useState, useEffect } from 'react'

export const useFetch = (url, defaultValue) => {
    const [data, setData] = useState(defaultValue)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setIsLoading(true)
                setData(Object.values(result))
            })
    }, [url])
    return [data, setData, isLoading]
}

