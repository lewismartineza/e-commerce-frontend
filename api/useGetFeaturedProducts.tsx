import {useState, useEffect} from 'react'

export function useGetFeaturedProducts() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`
    const [results, setResults] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
      (async() => {
        try{
            const res = await fetch(url)
            const json = await res.json()
            setResults(json)
            setLoading(false)
        } catch (error: any) {
            setError(error)
            setLoading(false)
        }
      })()
    }, [url])
    
    return {loading, results, error}

}