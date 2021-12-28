import NavBar from './components/header/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/main/Home';
import Contact from './components/main/Contact'
import Cart from './components/main/Cart'




function App() {
  return (
   <BrowserRouter> 
      <NavBar />
      <div className="container-fluid">
      <Routes>
        <Route path= "/" element= {<Home />} />
        <Route path= "/productos" element={<ItemListContainer />}/>
        <Route path= "/producto" element={<ItemDetailContainer />} />
        <Route path= "/categoria/:id" element= {<ItemListContainer />}/>
        <Route path= "/contacto" element={<Contact />}/>
        <Route path= "/carrito" element={<Cart />}/>
        <Route path= "*" />
        {/* <ItemListContainer greeting="Bienvenido a MStar, Servicios informáticos."/>
        <ItemDetailContainer /> */}
      </Routes>

      </div>
   </BrowserRouter>
  );
}

export default App;
