import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from "./components/Profile";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/landing" element={<Landing/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
