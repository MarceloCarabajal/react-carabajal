import NavBar from './components/header/NavBar'
import ItemListContainer from './components/itemList/ItemListContainer'
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/main/Home'
import Contact from './components/main/Contact'
import Cart from './components/header/Cart'
import { CustomProvider } from './components/contextFiles/CartContext' 


function App() {
  return (
   <BrowserRouter>
      <CustomProvider> 
        <NavBar />
        <div className="container-fluid">
        <Routes>
          <Route path= "/" element= {<Home />} />
          <Route path= "/productos" element={<ItemListContainer greeting="Bienvenido a MStar" />}/>
          <Route path= "/producto/:id" element={<ItemDetailContainer />} />
          <Route path= "/destacados/:nombre" element= {<ItemListContainer greeting="Bienvenido a MStar"  />}/>
          <Route path= "/categoria/:categoria" element= {<ItemListContainer greeting="Bienvenido a MStar" />}/>
          <Route path= "/contacto" element={<Contact />}/>
          <Route path= "/carrito" element={<Cart />}/>
          <Route path= "*" element={<h1>No existe la página</h1>}/>
        </Routes>
        </div>
      </CustomProvider>
   </BrowserRouter>
  );
}

export default App;
