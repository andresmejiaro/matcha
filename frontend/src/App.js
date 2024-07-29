import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css';
import React from 'react';


import {Header} from './Header.js'
import { Landing } from './LandingPage.js';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './SignUp.js';
import { Account } from './Account.js';
import { Chat } from './Chat.js';
import {ChatList} from './ChatList.js'
import {SignIn} from './SignIn.js'
import {Map} from './Map.js'
import {Memory} from './Memory.js'
import {NotFound} from './NotFound.js'
import {PossibleDateSearch} from './PossibleDatesSearch.js'
import {ProfileInfo} from './ProfileInfo.js'
import {ProfileViewer} from './ProfileViewer.js'
import {PossibleDateSuggestion} from './PossibleDatesSuggestion.js';
import {VideoChat} from "./VideoChat.js"
import { Recover } from './Recover.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"hola": 12};
  }
  render() {
    return (
      <div className="custom-bg">
        <Routes>
          <Route  path="/" element={<Header />} >
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
         </Route>
         <Route path = "*" element={<NotFound />} />
        </Routes>
        
     </div>
    );
  }
};


export default App;
