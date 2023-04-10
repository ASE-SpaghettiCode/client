import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from "./components/Profile";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import HomeMap from "./components/HomeMap";

import TravelNoteCreation from "./components/TravelNoteCreation"
import AccountEdition from "./components/AccountEdition";
import LikePostButton from "./components/likePostButton";
import PostCreation from "./components/PostCreation";


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
                    <Route path="/test/642bead2beef1c01ffaa56a0" element={<LikePostButton/>}/>
                    <Route path="/post-creation" element={<PostCreation/>} />
                    <Route path="/map" element={<HomeMap/>}/>
                    <Route exact path="/travel-note-creation"
                           element={<TravelNoteCreation readOnly={false} editMode={false} creationMode={true}/>}
                    />
                    <Route exact path="/travel-notes/:id"
                           element={<TravelNoteCreation readOnly={true} editMode={false} creationMode={false}/> }
                    />
                    <Route exact path="/travel-notes/edit/:id"
                           element={<TravelNoteCreation readOnly={false} editMode={true} creationMode={false}/>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;