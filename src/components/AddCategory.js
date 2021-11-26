import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // para prevenir el comportamiento default del formulario

        if( inputValue.trim().length >2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
        // console.log('submit hecho');
        
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}//se activa cada vez que la caja de texto cambie
                />
            </form>
        </>
    )
}

AddCategory.propTypes= {
    setCategories:PropTypes.func.isRequired
}
