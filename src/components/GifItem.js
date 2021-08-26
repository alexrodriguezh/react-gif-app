import React from 'react'

const GifItem = ({ id, title, url }) => {
    return (
        <div className="mx-2">
            <img src={url} alt={title} className="w-full object-cover object-center rounded-lg shadow-md" />    
            <div className="relative px-2 -mt-3">
            <div className="bg-white p-2 rounded-md shadow-lg">
                <p className="p-3 text-purple-700 mb-2">{ title }</p>        
            </div>
            </div>
        </div>
    )
}

export default GifItem
