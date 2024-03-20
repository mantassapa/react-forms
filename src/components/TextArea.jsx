import React, { useState } from 'react'

const TextArea = () => {
    const [text, setText]=useState("")

    const textChange =(event)=>{
        setText(event.target.value)
    }
  return (
    <div>
        <textarea value={text} onChange={textChange}></textarea>
    </div>
  )
}

export default TextArea