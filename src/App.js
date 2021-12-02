import { Fragment } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
   <Fragment>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a MStar!"/>
   </Fragment>
  );
}

export default App;
