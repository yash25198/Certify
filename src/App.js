import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Issue from './pages/Issue/Issue';

import View from './pages/View/View';
import Verify from './pages/Verify/Verify';

import Navbar from './Components/Navbar/Navbar';
import ConnectWallet from './Components/ConnectWallet/ConnectWallet';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <ConnectWallet/>
    <main>
      <Switch>
        <Route path="/view" exact>
          <View/>
        </Route>
        <Route path="/issue" exact>
          <Issue/>
        </Route>
        <Route path="/verify" exact>
          <Verify/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
