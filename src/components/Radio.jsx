import React, { useState } from 'react'

const Radio = () => {
    const [radio, setRadio] = useState("red")

    const changeRadio = (ev) => {
        console.log(ev.target.value);
        setRadio(ev.target.value)
    }
  return (
    <div>
        <input type="radio" name='colors' value="red" onChange={changeRadio} checked={radio==="red"}/> Red
        <input type="radio" name='colors' value="green" onChange={changeRadio} checked={radio==="green"}/> Green
        <input type="radio" name='colors' value="blue" onChange={changeRadio} checked={radio==="blue"}/> Blue
    </div>
  )
}

export default Radio