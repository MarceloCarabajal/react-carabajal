import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import PruebaFetch from './components/PruebaFetch';
import ItemDetailContainer from './components/ItemDetailContainer';




function App() {
  return (
   <Container fluid> 
      <NavBar />
      <ItemListContainer greeting="Bienvenido a MStar!"/>
 
      <PruebaFetch />
        
   </Container>
  );
}

export default App;
