import { useState, useEffect } from 'react'
import getGif from '../helpers/getGif'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGif( category )
            .then( i => {
                setState({
                    data: i,
                    loading: false
                })
            })
    }, [category])

    return state
}
