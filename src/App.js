import "../src/styles/index.css"
import Button from './components/Button';
import Form from "./components/Form";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Compare from "./components/Compare"

function App() {
  return (
    <>
   



    <Routes>
          <Route path="/paridhi" element={<Form/>} />
          <Route path="/rudresh" element={<Form/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="/compare" element={<Compare/>}/>
         
       </Routes>

    
    </>

    
  )
}

export default App;
