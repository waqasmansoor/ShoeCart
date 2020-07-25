import React, {  useReducer } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NoMatch from './components/NoMatch'
import Item from './components/Item'
import NavBar from "./NavBar";
import data from './data/data.json'
import AppReducer from './context/AppReducer'


function App() {
  
  const [Items_in_cart,action]=useReducer(AppReducer,[])
  
  

  function Add_to_cart(id){
  let Item_present=false    

    if(Items_in_cart.length>0){
      let items_present=Items_in_cart.filter((k,i)=>k.id===id)
      if(items_present.length>0){Item_present=true
        alert("Item Already Added to Cart")
      }
          
        
      
      
    }
    if(!Item_present){

      action(
        {
          type:'ADD',
          payload:{

            id:id,
            count:1
          }
        }
      )      
    }
      
    
  }

  function dec_item(id){
    
    action({
      type:'DEC',
      id:id
    })
  }
  function inc_item(id){
    action({
      type:'INC',
      id:id
    })
    
    
  }
  
  return (
    
      <Router>
        <div className='app'>
          <NavBar Items_in_cart={Items_in_cart} />
          <div className='card-container'>
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/products" exact element={<Products Add_to_cart={Add_to_cart} data={data}/>} />
              <Route path="/products/:id" element={<Item data={data} Add_to_cart={Add_to_cart} />} />
              <Route path="/cart"  element={<Cart Items_in_cart={Items_in_cart} data={data} dec_item={dec_item} inc_item={inc_item}/>} />
              <Route path='*' element={<NoMatch/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    
  );
}

export default App;
