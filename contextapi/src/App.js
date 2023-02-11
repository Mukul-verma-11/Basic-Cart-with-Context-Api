import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Cart from './components/Cart';
import Home from './components/Home';

import { useContext } from 'react';
import { CardContext } from './context/Card_context';

function App() {

  const CartState = useContext(CardContext)

  return (
    <BrowserRouter>
    <div className="App">

        <Link to='/cart' >Cart : { CartState.Items.length }</Link> <br></br>

        <Routes>
          <Route path='/' element={[<Home/>]} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>    


    </div>
    </BrowserRouter>
  );
}

export default App;
