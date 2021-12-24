import { Container } from 'react-bootstrap';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer';
import PruebaFetch from './components/PruebaFetch';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/header/CartWidget'




function App() {
  return (
   <BrowserRouter> 
      <NavBar />
      <Container fluid>
      <Routes>
        <Route path= "/" element={<CartWidget />}/>
        <Route path= "/categoria/:producto1" element={<ItemListContainer />}/>
        <Route path= "/categoria/:producto2" element=""/>
        <Route path= "/" element=""/>
        <Route path= "/" element=""/>
        {/* <ItemListContainer greeting="Bienvenido a MStar, Servicios informáticos."/>
        <ItemDetailContainer /> */}
      </Routes>

      </Container>
   </BrowserRouter>
  );
}

export default App;
