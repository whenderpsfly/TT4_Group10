import logo from './logo.svg';
import './App.css';
import TransactionHistory from './Components/transactionhistory'
import React from 'react';
import ReactDOM from 'react-dom';
import Username from './Components/username';
import Password from './Components/password';
import Login from './Components/login';
import Checkboxes from './Components/checkbox'
import {Container} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container maxWidth='xs' style={{backgroundColor:"skyblue"}}>
        <Username></Username>
        <Password></Password>
        <Login></Login>
        <Checkboxes />
        <TransactionHistory />
      </Container>
    </div>
  );
}

export default App;
