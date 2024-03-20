import React, { useState } from 'react'

const Range = () => {
    const [range, setRange] = useState("red")

    const changeRange = (ev) => {
        console.log(ev.target.value);
        setRange(ev.target.value)
    }
  return (
    <div>
        <input type="Range" value={range} onChange={changeRange}/> Red
    </div>
  )
}

export default Range