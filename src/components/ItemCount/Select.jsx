import './select.css'
import React from 'react'


const Select = ({options, set}) => {

    const handleChange = (e) => {
        console.log(e.target.value)
        set(e.target.value)
    }

  return (
    <select className='form-select f' onChange={handleChange}> 
        {options.map((opt) => <option value={opt.value}>{opt.text}</option>)}
    </select>
  )
}

export default Select