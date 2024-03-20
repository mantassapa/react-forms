import React, { useState } from 'react'

const Input = () => {
    const [text, setText]=useState("")
    const [textShow, setTextShow]=useState("")
    

    const textChange = (event)=>{
        console.log(event);
        setText(event.target.value)
        // setTextShow(text) shinkroniskumas blogai atvaizduojami duomenys
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(text);
        setText("")

        setTextShow(text)
    }
  return (
    <div>Input: 
        <input type="text" value={text} onChange={textChange}/>

        <form onSubmit={handleSubmit}>
            <h2>form</h2>
            <input type="text" value={text} onChange={textChange}/>
            <button type='submit'>submit</button>
        </form>

        <h1>{textShow}</h1>
        <h2>{text}</h2>

    </div>
  )
}

export default Input