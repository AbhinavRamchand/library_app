// import logo from './logo.svg';
// import './App.css';
import Demo1 from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Addbook from "./components/Addbook";
import Editbook from "./components/Editbook";

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Demo1/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/Addbook' element={<Addbook/>}></Route>
          <Route path='/Editbook' element={<Editbook/>}></Route>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
