import { useState, useEffect, useMemo } from "react"
import qs from 'qs'

export default function useHashQuery() {
    const [hash, setHash] = useState(location.hash)
    const hashQuery = useMemo(() => {
        return hash ? qs.parse(hash.slice(1)) : {}
    }, [hash])
    useEffect(() => {
        const handleHashChange = () => {
            setHash(location.hash)
        }
        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    })
    return hashQuery
}
