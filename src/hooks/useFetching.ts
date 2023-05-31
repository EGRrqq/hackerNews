import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const useFetching = (
    DEFAULT_VALUE: number,
    INCREMENT_VALUE: number,
    MAX_VALUE: number
) => {
    const [counter, setCounter] = useState<number>(DEFAULT_VALUE)

    const { ref, inView } = useInView({
        threshold: 0.5,
        trackVisibility: true,
        delay: 300,
        rootMargin: '384px'
    })

    useEffect(() => {
        if (inView) {
            if (counter + INCREMENT_VALUE >= MAX_VALUE) {
                setCounter(MAX_VALUE)
            } else {
                setCounter(counter + INCREMENT_VALUE)
            }
        }
    }, [inView])

    return { ref, counter }
}
