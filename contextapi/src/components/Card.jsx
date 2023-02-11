import React,{useContext} from 'react'
import './style.css'
import { CardContext } from './../context/Card_context';


const Card = ({ name, price }) => {

    const CartState = useContext(CardContext)
    
  return (
    <div className='card-box'>
          

           <div className="card">
              <h2>{name}</h2>
              <small>$ {price}</small> <br />
              <button onClick={() => CartState.SetItems([[name,price],...CartState.Items])} >Add to Cart</button>
          </div>


    </div>
  )
}

export default Card