import './App.css';
import StripeContainer from './Component/StripeContainer';
import demo from "./assets/spatula.jpg"
import { useState } from 'react';

function App() {
  const [showItem, setshowItem] = useState(true);
  return (
    <div className="App">
     <h1>The Store Page</h1>
     {!showItem ? <StripeContainer/> : <> <h3>$10.00</h3> <img src={demo} alt='demo'/> <button onClick={() => {setshowItem(false)}}>Buy</button></>}
    </div>
  );
}

export default App;
