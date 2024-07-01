import { Route,Routes, BrowserRouter, } from "react-router-dom";
import * as React from "react";
import Dashboard from '././src/Pages/Dashboard/Dashboard'
import Login from '././src/Pages/Login/Login';

function Router() {
  
    return (
      
        <BrowserRouter>
        <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        </Routes>
        
        </BrowserRouter>
          
    )
  }
  
  export default Router