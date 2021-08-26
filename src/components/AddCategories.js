import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategories = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        if( inputValue.trim().length > 2 ){
            setCategories( i => [inputValue, ...i])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                value = { inputValue }
                onChange = { handleChange }
                className="border-2 border-blue-600"
            />
        </form>
    )
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategories
