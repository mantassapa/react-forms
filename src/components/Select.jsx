import React, { useState } from 'react'

const Select = () => {
    const [text, setText]=useState("")

    const selectChange =(event)=>{
        setText(event.target.value)
    }
  return (
    <div>
        <select onChange={selectChange} value={text}>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>
        <p>select color</p>
    </div>
  )
}

export default Select