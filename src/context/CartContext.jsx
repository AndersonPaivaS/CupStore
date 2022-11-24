import { useState, createContext } from "react";

export const CartContext = createContext({})

export function CartProvider( {children} ) {

    const [name, setName] = useState("")
    const handleName = (e) => {
      let inputName = e.target.value
      setName(inputName)
    }
    const handleSubmit = () => {
      if(name.length === 0) {
        alert('Clique em OK para entrar como visitante!');
        setName("Visitante")
      }
    }

    const produtos = [

        {
          nome: "Camisa Nike Austrália 2022/23",
          img: "../../../public/australia.webp",
          valor: "R$ 399,99",
          id: 0,
          quant: 3,
        },
    
        {
          nome: "Camiseta Nike Brasil Pré-Jogo",
          img: "../../../public/brasil1.webp",
          valor: "R$ 299,99",
          id: 1,
          quant: 0,
        },
    
        {
          nome: "Camisa Nike Catar II 2022/23",
          img: "../../../public/catar.webp",
          valor: "R$ 399,99",
          id: 2,
          quant: 0,
        },
    
        {
          nome: "Camisa Nike Croácia I 2022/23",
          img: "../../../public/croacia.webp",
          valor: "R$ 399,99",
          id: 3,
          quant: 0,
        },
    
        {
          nome: "Camiseta Manga Longa Nike Brasil",
          img: "../../../public/brasil2.webp",
          valor: "R$ 449,99",
          id: 4,
          quant: 0,
        },
    
        {
          nome: "Camisa Nike França I 2022/23",
          img: "../../../public/franca.webp",
          valor: "R$ 399,99",
          id: 5,
          quant: 0,
        },
    
        {
          nome: "Camiseta Nike Brasil 22 Escudo",
          img: "../../../public/brasil3.webp",
          valor: "R$ 179,99",
          id: 6,
          quant: 0,
        },
    
        {
          nome: "Camisa Nike Holanda I 2022/23",
          img: "../../../public/holanda.webp",
          valor: "R$ 399,99",
          id: 7,
          quant: 0,
        },
    
        {
          nome: "Camiseta Nike Inglaterra",
          img: "../../../public/inglaterra.webp",
          valor: "R$ 299,99",
          id: 8,
          quant: 0,
        },
        
        {
          nome: "Camiseta Nike Brasil 22 Swoosh",
          img: "../../../public/brasil4.webp",
          valor: "R$ 179,99",
          id: 9,
          quant: 0,
        },
    
      ]
    const [cartList, setCartList] = useState(0)

    const addCart = () => {
      setCartList(cartList + 1)
    }

    const resetCart = () => {
      setCartList(0)
    }

    return(
        <CartContext.Provider value={{
            name,
            handleName,
            handleSubmit,
            cartList,
            produtos,
            addCart,
            cartList,
            resetCart,
         }}>

            {children}
        </CartContext.Provider>
    )
}