import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './components/ItemCount/ItemCount';
import Error from './components/Error/Error';
import Item from './components/Item/Item';

  function App () {

  return (


    <BrowserRouter>
      
      <NavBar/>

      <Routes>

        <Route path = "/" element = { <ItemListContainer/> } />     
        <Route path= "/category/:id" element= {<ItemListContainer/>} />
        <Route path= "/item/:id" element = { <ItemDetailContainer/>}>
        
        </Route>

        <Route path = "*" element = {<Error/>} />

      </Routes>

      <Footer/>

    </BrowserRouter>

    );
    }

export default App
