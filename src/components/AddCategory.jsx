import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return(
        <form onSubmit={onFormSubmit}>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}