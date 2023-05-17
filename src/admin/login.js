import React from 'react'
import './styleAdmin.scss'
import { useNavigate } from 'react-router-dom'

export function Login() {
    const [inputs,setInputs] = React.useState({})
    //const [agents,setAgents] = React.useState([])

    const handleChange=(event)=>{
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(inputs)
        navigate('/dashboard')
    }

    const navigate = useNavigate()
    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h1>MPJL / PHILADELPHIE PANEL ADMIN</h1>
                <div className='container-form'>
                    <label>Identifiant</label>
                    <input 
                        type='text'
                        name='identity'
                        placeholder='Identifiant' 
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className='container-form'>
                    <label>Mot de passe</label>
                    <input 
                        type='password' 
                        name='password'
                        placeholder='*****' 
                        required
                        onChange={handleChange}
                    />
                </div>
                <button className='btn'>
                    Conexion
                </button>
            </form>
        </div>
    )
}
