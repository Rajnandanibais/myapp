
import './App.css';
import Main from './Main';
import Data from './Data';

function App() {
   const Datalist= Data.map(product => 
    <Main  Name={product.name} Price={product.price}   Manufacture={product.manufacturername} imgUrl= {product.imgUrl}/>)
   
  
  return (
    <div className="App">
          {Datalist}
      
    </div>
  );
  }

export default App;
