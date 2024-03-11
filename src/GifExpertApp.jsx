import {useState} from 'react'
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Bocchi the rock'])

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
            {
                categories.map((category) => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                )
            }
        </>
    )
}
