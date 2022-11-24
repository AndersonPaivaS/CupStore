import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Header.css'

export default function Header() {
    const { name, cartList, resetCart } = useContext(CartContext)
  return (
    <div className='headerContainer'>
        <h1> <span className='clientName'>{ name.length > 0 ? name : "Visitante"}</span>, seja bem vindo(a) à <span className='storeName'>CupStore!</span></h1>
        <div className='cart'>
            <button> <img src="/sacolas-de-compras.png" alt="sacola de compras" /> <span> {cartList} </span> </button>
            <button onClick={resetCart} id='clearButton'> Limpar </button>
        </div>
    </div>
  )
}
