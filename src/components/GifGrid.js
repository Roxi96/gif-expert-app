import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { GifGridItem } from './GifGridItem';
// import {getGifs} from '../helpers/getGifs';


export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])
   const {data, loading} = useFetchGifs();
    
    // useEffect(()=>{
    //     getGifs(category)
    //     .then(setImages)
    // }, [category]);

    return (
        <>
        <h3>{category}</h3>
        {loading ? 'Cargando...':'data cargada'}
        {/* <div className="card-grid">
         
           
                {
                    images.map( img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}

                        />
                    ))
                }
          
            
          
        </div> */}
        </>
    )
}
