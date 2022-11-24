import React from 'react'
import { CartContext } from '../../context/CartContext'
import './Home.css'
import { useContext } from 'react'
import Header from './Header.jsx'

export default function Home() {

  const { cartList, produtos, addCart } = useContext(CartContext)

  
  
  return (
    <div className='homeContainer'>
      <Header />
      <div className='itens'>
        {produtos.map( (item) =>
          <div className='item'>
            
            <h1 className='text-base font-semibold text-green-600'> {item.nome} </h1>
            <img className='rounded-md' src={item.img} alt={item.nome} />

            <div className='flex flex-col items-center'>
              <p className='text-2xl font-extrabold text-green-800'> {item.valor} </p>
              <button 
                onClick={addCart}
                value={item.id}> 
                <img id={item.id}
                className='w-7'
                src="cart-before.png"
                alt="Cart"/>
              </button>
            </div>

          </div>
        )}
      </div>
          
    </div>
  )
}
