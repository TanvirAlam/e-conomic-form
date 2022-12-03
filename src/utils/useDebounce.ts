import { useEffect, useState } from 'react'

type Props = {
    value: string;
    delay: number;
}

export default function useDebounce({ value, delay }: Props) {
    const [debounceValue, setDebounceValue] = useState()

    useEffect(() => {
        const timesoutId = setTimeout((value) => {
            setDebounceValue(value);
        }, delay)

        return () => clearTimeout(timesoutId)
    }, [delay, value])

    return debounceValue;
}