import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


//sfc stateless functional component  (raft o sfc )


 const GifExpertApp = () => {

  
    const [categories, setCategories] = useState([ 'one punch' ]);


    //TAREA: esta funcion tiene q agregar un nuevo elemento al arreglo
    // const handleAdd = ()=>{
    //    setCategories([...categories, 'naruto']);

    // setCategories(cats => [...cats, 'hunterXhunter']);
        
    // }

    return (
        <>
           <h2>Gif Expert App</h2> 
           <AddCategory setCategories={setCategories}/>
           <hr />

          
          <ol>
              {
                  categories.map( category =>(
                      <GifGrid 
                      key={category}
                      category={category}
                      />
                  ))
                  
              }
          </ol>
        </>
    )
}

 export default GifExpertApp;