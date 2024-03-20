import React, { useState } from 'react'

const FormOne = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })
    const handleChange=(ev)=>{
        const {name, value} = ev.target
        setForm((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit=(ev)=>{
        ev.preventDefault()
        alert(`Hello ${form.name}, ${form.email}, ${form.message}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={form.name} onChange={handleChange} name="name"/>
            <input type="email" value={form.email} onChange={handleChange} name="email"/>
            <textarea value={form.message} onChange={handleChange} name="message"></textarea>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormOne