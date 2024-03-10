import {useState} from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Bocchi the rock', 'Classroom of elite'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        
        setCategories([newCategory, ...categories])
        //setCategories(cat => [...cat, 'The Division 2'])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            
            {/* <AddCategory setCategories={setCategories}/> */}
            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => {
                            return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}
