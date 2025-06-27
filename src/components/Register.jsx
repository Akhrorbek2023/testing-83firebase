import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

const Register = ({setLogged}) => {
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(login == 'admin' && pass == 1234){
            setLogged(true)
        }

        setLogin('')
        setPass('')
        
    }

    const register = async () => {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
    }
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='w-[300px]'>
            <h1 className='text-center mb-3'>Register</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setLogin(e.target.value)} className='w-full mb-3 p-3 border rounded-md' type="text" placeholder='Enter your login' />
                <input onChange={(e) => setPass(e.target.value)} className='w-full mb-3 p-3 border rounded-md' type="password" placeholder='Enter your parol' />
                <button className='border px-5 py-3 rounded-md bg-green-400 text-white'>Login</button>
                <button onClick={() => register()} className='border px-5 py-3 rounded-md bg-green-400 text-white'>Register with Google</button>
            </form>
        </div>
    </div>
  )
}

export default Register