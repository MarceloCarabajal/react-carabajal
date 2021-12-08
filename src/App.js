import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
   <Container fluid> 
      <NavBar />
      <ItemListContainer greeting="Bienvenido a MStar!"/>
    
   </Container>
  );
}

export default App;
