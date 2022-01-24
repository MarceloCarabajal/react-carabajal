import NavBar from './components/header/NavBar'
import ItemListContainer from './components/itemList/ItemListContainer'
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/main/Contact'
import Cart from './components/header/Cart'
import CustomProvider from './components/contextFiles/MyContext' 


function App() {
  return (
    <CustomProvider> 
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
        <Routes>
          <Route path= "/" element= {<ItemListContainer greeting="Bienvenido a MStar" />} exact/>
          <Route path= "/productos" element={<ItemListContainer greeting="Bienvenido a MStar" />}/>
          <Route path= "/producto/:id" element={<ItemDetailContainer />} />
          <Route path= "/categoria/:id" element= {<ItemListContainer greeting="Bienvenido a MStar" />}/>
          <Route path= "/contacto" element={<Contact />}/>
          <Route path= "/carrito" element={<Cart />}/>
          <Route path= "*" element={<h1>No existe la página</h1>}/>
        </Routes>
        </div>
      </BrowserRouter>
  </CustomProvider>
  );
}

export default App;
