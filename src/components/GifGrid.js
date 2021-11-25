import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({category}) => {

    
   const {data:images, loading} = useFetchGifs(category);
    
   

    return (
        <>
        <h3>{category}</h3>
            {/* {loading ? <p>Loading</p> : null} si es true muestra loading, caso contrario no muestra nada */}
            {loading && <p>Loading</p>}// si es true muestra el loading , caso contrario no muestra nada
         <div className="card-grid">
         
                {
                    images.map( img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}

                        />
                    ))
                }
        </div> 
        </>
    )
}
