import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {

  return (
    <div className="App" bgcolor="black">
      <NavBar />
      <ItemListContainer greeting="Hola, somos Guitar budgets" color="blue" />
    </div>
  );
}

export default App;
