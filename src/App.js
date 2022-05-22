// import React from "react";/
import './App.css';
import {Switch,Route,Routes,Navigate,Redirect,Link} from "react-router-dom";


function App(){
  const pizza_items = [{
    "name": "Scone Pizza Recipe",
    "pic" : "https://i.ndtvimg.com/i/2016-04/crusty-gourmet-pizzas-gurgaon-625_625x350_41460295393.jpg"
    },{
      "name" : "Multigrain Pizza Recipe",
      "pic" : "https://i.ndtvimg.com/i/2015-02/pizza_625x350_51424681477.jpg"
    },{
    "name" : "Chicken Pizza Recipe",
    "pic" : "https://i.ndtvimg.com/i/2015-02/meat-pizza_625x350_41424681507.jpg"
    },{
    "name" : "Margherita Pizza Recipe",
    "pic" : "https://i.ndtvimg.com/i/2015-02/cheese-pizza_625x350_71424681540.jpg"
    }];

  return(

<div className="App">

  <div className='navication'>
    <p className='app-name'><b className='name-clr'>P</b>izza Delivery</p>
    <div className='app-bar'>
      <p className='app-ba'><Link to="/" className="n-bar">Home</Link></p>
      <p className='app-ba'><Link to="/offer" className="n-bar">Offer</Link></p>
      <p className='app-ba'><Link to="/login" className="n-bar">Login</Link></p>
      <p className='app-ba'><Link to="/signin" className="n-bar">Signin</Link></p>
    </div>
  </div>
    
<Routes>
  <Route path='/' exact element={
    <section className="pizza-list">
      {pizza_items.map(({name,pic})=>(
        <Pizza name={name}
        pic = {pic}/> ))}
      </section>}/>
  <Route path='/*'  element={<Notfound/>}/>
  <Route path='/signin' exact element={"signin"}/>     
</Routes>





    {/* <Pizza/> */}
    {/* <Routes> */}
      {/* <Route path="/" exact element={<Pizza/>}/> */}
      {/* <Route path="/home" exact element={<Pizza/>}/> */}
    {/* </Routes> */}
</div>
  )
}

export default App;

function Notfound(){
  const style = {width:"90%",height:"55%",margin:"10px"};
  return (
    <img style={style}
    src="https://www.lifewire.com/thmb/fS8MEzmEgg0bV5BGtTVDlHpIdGg=/3000x1687/smart/filters:no_upscale()/404-not-found-error-explained-2622936-Final-fde7be1b7e2e499c9f039d97183e7f52.jpg"
    alt='404 not found'/>
  )
}

function Pizza({name,pic})
{
  return (
    <div className="pizza-container">
      <img className = "pizza"
        src = {pic}
        alt = {name} />
      <p className="pizza-name">{name}</p>
    </div>
  )
}



