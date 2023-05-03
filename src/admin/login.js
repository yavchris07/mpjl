import React from 'react'
import './styleAdmin.scss'

export function Login() {
    

    return (
        <div className='login'>
            <form>
                <h1>MPJL / PHILADELPHIE PANEL ADMIN</h1>
                <div className='container-form'>
                    <label>Identifiant</label>
                    <input 
                        type='text' 
                        placeholder='Identifiant' 
                        required 
                    />
                </div>
                <div className='container-form'>
                    <label>Mot de passe</label>
                    <input 
                        type='password' 
                        placeholder='*****' 
                        required 
                    />
                </div>
                <button>
                    Conexion
                </button>
            </form>
        </div>
    )
}
