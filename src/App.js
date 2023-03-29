import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting="Hola, esta es la primer entrega del proyecto" />
      </div>
    </>
  );
}

export default App;
