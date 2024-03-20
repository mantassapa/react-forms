import React, { useState } from 'react'

const CheckBox = () => {
    const [check, setCheck]=useState(false)
    const checkboxChange=()=>{
        setCheck((checked)=>!checked)
    }
  return (
    <div>
        <input type="checkbox" onChange={checkboxChange} checked={check}/>
    </div>
  )
}

export default CheckBox