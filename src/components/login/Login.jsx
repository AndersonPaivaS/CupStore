import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

import './Login.css'

export default function Login() {
  const { handleName, handleSubmit } = useContext(CartContext)

  


  return (
    <div className='bg-green-200 p-16 rounded-2xl flex flex-col gap-5 items-center'>

      <div>
        <h1 className='text-3xl font-bold text-green-900 '> Fifa World Cup</h1>
        <h2 className='text-2xl font-bold text-green-700 mt-[-1vh]'> Qatar 2022 </h2>
      </div>
      
      <div className='flex flex-col items-center gap-2'>
        <p className='font-bold text-green-700 '> Digite o seu nome </p>
        <input onChange={handleName} className='bg-green-100 p-2 rounded-lg' type="text" placeholder='Nome' />
        <span className='text-[1.3vh] text-green-400 '>*Deixe o campo acima vazia para entrar como visitante</span>
      </div>

      
      <Link to="/home" > <button onClick={handleSubmit} className='bg-green-700 p-2 rounded-lg text-green-200 font-normal'> Entrar </button> </Link>

    </div>
    
  )
}

