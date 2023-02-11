import React,{useContext,useState} from 'react'
import {CardContext} from '../context/Card_context'
import Card from './Card'



const Cart = () => {
    const CartState = useContext(CardContext)

    console.log(CartState);
  return (
      <div>Cart
          <div>
              {CartState.Items}

              {CartState.Items && CartState.Items.map((item,i) => <Card key={i} name={item[0]} price={item[1]} />)}

          </div>
    </div>
  )
}

export default Cart