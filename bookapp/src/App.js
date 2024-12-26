import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Sell from './components/Sell'
import Buy from './components/Buy'
import About from './components/About'
import Tuition from './components/Tuition'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import "./components/style.css"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/sell" element={<Sell />}></Route>
        <Route path="/buy" element={<Buy />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tuition" element={<Tuition />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
