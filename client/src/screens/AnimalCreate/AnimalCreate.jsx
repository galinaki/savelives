import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import AnimalForm from '../../components/AnimalForm/AnimalForm'

const default_input = {
  name: '',
  img_url: '',
  population: 0,
  habitats: '',
  link: '',
  location: ''
}

export default function AnimalCreate(props) {

  const [input, setInput] = useState(default_input)
  const navigate= useNavigate()

  const handleTextInput = (event) => {
    const { name, value } = event.target
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }

  const handleNumberInput = (e) => {
    const { name, valueAsNumber } = e.target
    setInput((prevInput) => ({
      ...prevInput,
      [name]: valueAsNumber,
    }))
  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    const AnimalData = input
    props.handleCreate(AnimalData)
    navigate('/animals')
  }

  return (
    <div>
      <h3>Add an Animal</h3>
      <AnimalForm
        input={input}
        handleTextInput={handleTextInput}
        handleNumberInput={handleNumberInput}
        handleSubmit={handleSubmit}
        type={'Add'}
      />
    </div>
  )
}
