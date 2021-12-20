import { Container } from 'react-bootstrap';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer';
import PruebaFetch from './components/PruebaFetch';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';




function App() {
  return (
   <Container fluid> 
      <NavBar />
      <ItemListContainer greeting="Bienvenido a MStar, Servicios informáticos."/>
      <ItemDetailContainer />
      <PruebaFetch />
        
   </Container>
  );
}

export default App;
