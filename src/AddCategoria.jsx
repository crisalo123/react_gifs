import React from 'react'
import { useState } from 'react'

const AddCategoria = ({ setCategories }) => {
  const [inpuntValue, setInpuntValue] = useState('')

  const mostrarDatos = (event) => {
    setInpuntValue(event.target.value)
  }

  const onSumbit = (event) => {
    event.preventDefault()
    if (inpuntValue.trim().length <= 1) return

    setCategories((categories) => [...categories, inpuntValue])
    setInpuntValue('')
  }
  return (
    <div>
      <form onSubmit={(event) => onSumbit(event)}>
        <input
          type="text"
          placeholder="Ingrese dato"
          value={inpuntValue}
          onChange={mostrarDatos}
          className="bg-gray-500  border-2"
        />
      </form>
    </div>
  )
}

export default AddCategoria
