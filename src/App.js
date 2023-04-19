import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter as Router, Routes, Navigate, Route,} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
