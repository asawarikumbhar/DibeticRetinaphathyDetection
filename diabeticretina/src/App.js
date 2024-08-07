
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import Treatement from './Components/Treatement';
import Login from './Components/Login'
import Contact from './Components/Contact';
import Appointment from './Components/Appointment';
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Login />
      <Routes>
        <Route path={'/tratement'} element={<Treatement/>}></Route>
        <Route path={'/contact'} element={<Contact/>}></Route>
        <Route path={'/header'} element={<Header/>}></Route>
        <Route path={'/appointment'} element={<Appointment/>}></Route>
      </Routes>
      
      </BrowserRouter>
      {/* <Treatement/> */}
    </div>
  );
}

export default App;
