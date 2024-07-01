import './App.css'
import {  BrowserRouter} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';



function App() {
  

  return (
    <>  
    <BrowserRouter>
    <Dashboard/> 
    </BrowserRouter>
    </>
  )
}

export default App
