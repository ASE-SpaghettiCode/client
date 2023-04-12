import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from "./components/Profile";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import HomeMap from "./components/HomeMap";

import TravelNoteCreation from "./components/TravelNoteCreation"
import AccountEdition from "./components/AccountEdition";
import FollowingList from "./components/FollowingList";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/landing" element={<Landing/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/users/:id" element={<Profile/>}/>
                <Route path="/home" element={<HomeMap/>}/>
                <Route exat path="/profile/editing" element={<AccountEdition/>}/>

                <Route path="/map" element={<HomeMap/>}/>
                <Route path="/travel-note-creation" element={<TravelNoteCreation readOnly={false}/>}/>
                <Route exact path="/travel-notes/:id" element={<TravelNoteCreation readOnly={true}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
