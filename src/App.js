import { useState } from 'react';
import { Route , BrowserRouter as Routers , Switch } from 'react-router-dom';
import MainCategories from './componets/mainCategories';
// import MainLogin from './componets/mainLogin';
import Categories from './pages/categories';
import Contact from './pages/contact';
import Home from './pages/home';
import Login from './pages/login';
import Sign from './pages/sign';
import SingleNews from './pages/singleNews';


function App() {
  return (
  
<div className= {`App`}>
     <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<MainCategories/>}/>
      <Route path='/' element={<SingleNews/>}/>
      <Route path='/' element={<Contact/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/' element={<Sign/>}/>
     </Route>
</div>

  
  );
}

export default App;