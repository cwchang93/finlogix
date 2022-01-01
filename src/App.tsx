import React from 'react';
import logo from './logo.svg';
import Button from './components/Button/Button'
import { Route } from 'react-router-dom';
import Login from './pages/Login/Login'
import Registered from './pages/Registered/Registered';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Layout maxWidth='1180px'>
        <Header logoSrc="https://acy.com/images/common/logo.svg" />


        <Route path="/login">
          <Login />
        </Route>

        <Route path="/Registered">
          <Registered />
        </Route>
      </Layout>

    </div>
  );
}

export default App;
