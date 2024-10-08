import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles/styles.css';
import React, { useEffect } from 'react'


import {Header} from './Components/Header.js'
import { Landing } from './Components/LandingPage.js';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './Components/SignUp.js';
import { Account } from './Components/Account.js';
import { Chat } from './Components/Chat.js';
import {ChatList} from './Components/ChatList.js'
import {SignIn} from './Components/SignIn.js'
import {Map} from './Components/Map.js'
import {Memory} from './Components/Memory.js'
import {NotFound} from './Components/NotFound.js'
import {PossibleDateSearch} from './Components/PossibleDatesSearch.js'
import {ProfileInfo} from './Components/ProfileInfo.js'
import {ProfileViewer} from './Components/ProfileViewer.js'
import {PossibleDateSuggestion} from './Components/PossibleDatesSuggestion.js';
import {VideoChat} from "./Components/VideoChat.js"
import { Recover } from './Components/Recover.js';

import {init} from './Reducers/authSlice.js';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(init());
  },[dispatch])

  return (
  <div>
    <div>
      <Header/>
    </div>
    <div className="custom-bg">
      <Routes>
       <Route exact path="/" element={<Landing />}></Route>
       <Route path="/signup" element={<SignUp />}></Route>
       <Route path="/signin" element={<SignIn />}></Route>
       <Route path="/account" element={<Account />}></Route>
       <Route path="/chat" element={<Chat />}></Route>
       <Route path="/chatlist" element={<ChatList />}></Route>
       <Route path="/map" element={<Map />}></Route>
       <Route path="/memory" element={<Memory />}></Route>
       {/* <Route path="/notfound" element={<NotFound />}></Route> */}
       <Route path="/profileinfo" element={<ProfileInfo />}></Route>
       <Route path="/profileviewer" element={<ProfileViewer />}></Route>
       <Route path="/posibledatesearch" element={<PossibleDateSearch />}></Route>
       <Route path="/posibledatesuggestion" element={<PossibleDateSuggestion />}></Route>
       <Route path="/profileinfo" element={<ProfileInfo />}></Route>
       <Route path="/profileviewer" element={<ProfileViewer />}></Route>
       <Route path="/videochat" element={<VideoChat />}></Route>
       <Route path="/recover" element={<Recover />}></Route>
       <Route path = "*" element={<NotFound />} />
      </Routes>
      
   </div>
   </div>
  );
}

export default App;
