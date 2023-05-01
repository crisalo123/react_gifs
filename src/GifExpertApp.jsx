import { useState } from 'react'
import AddCategoria from './AddCategoria'
import { GifGrid } from './GifGrid'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon ballz'])

  const addCategories = (newCategory) => {
    setCategories([...categories, 'naruto'])
  }

  return (
    <div className="w-full m-auto h-9/12">
      <h1>Listado</h1>
      <AddCategoria setCategories={setCategories} />

      {categories.map((dato) => (
        <GifGrid key={dato} category={dato} />
      ))}
    </div>
  )
}

export default GifExpertApp
