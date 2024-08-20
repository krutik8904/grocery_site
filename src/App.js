import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './Components/Home';
import Home2 from './Components/Home2';
import Home3 from './Components/Home3';
import Home4 from './Components/Home4';
import Home6 from './Components/Home6';
import Home7 from './Components/Home7';
import Home8 from './Components/Home8';

function App() {
  return (
    <>
    <div>
     <BrowserRouter>  
     <Routes>
      <Route path="/" element={<Home/>}/>

     </Routes>
     <Home2/>
     <Home3/>
     <Home4/>
    <Home6/>
    <Home7/>
    <Home8/>
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
