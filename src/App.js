import './App.css';
import image from './shopping.jpg'
import imageMan from './man.jpg'
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='App'>
      <div className="container">
        <img src={ image } alt='shopping' width='250px'/>
      </div>
      <div className="container">
        <h1>Список покупок</h1>
      </div>
      <GroceryList/>
      <div className="container">
        <img src={imageMan} alt='man' width='250px'/>
      </div>
    </div>
  );
}

export default App;
