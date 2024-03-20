import React, { useState } from 'react'

const TaskOne = ({handleShow}) => {
    const [text, setText] = useState("")
    const [textShow, setTextShow] = useState("")

    const changeHandle = (ev) =>{
        setText(ev.target.value)
        setTextShow(text)
        handleShow(ev.target.value)
    }
  return (
    <div>
        <p>pirma uzduotis</p>
        <input type="text" onChange={changeHandle}/>
        <h2>{text}</h2>
        <p>antra uzduotis</p>
        <input type="text" onChange={changeHandle}/>
        <h2>{textShow}</h2>
        <p>trecia uzduotis</p>
        <input type="text" value={text} onChange={changeHandle}/>

    </div>
  )
}

export default TaskOne