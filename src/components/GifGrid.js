import React from 'react'
import {useFetchGifs} from '../hooks/useFetchGifs'
import GifItem from './GifItem'

const GifGrid = ({category}) => {

    const { data: images, loading } = useFetchGifs( category )

    return (
        <>
            <h3 className="font-semibold text-blue-800 text-2xl ml-2 my-3">{category}</h3>
            { loading && <p>Cargando...</p>}
            <div className="flex flex-nowrap">
                {
                    images.map( i => (
                        <GifItem 
                            key = {i.id}
                            {...i}
                        />
                    ))
                }
            </div>
            
            
        </> 
    )
}

export default GifGrid
