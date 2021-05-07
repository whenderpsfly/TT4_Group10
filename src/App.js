import logo from './logo.svg';
import './App.css';
import TransactionHistory from './Components/transactionhistory'
import React from 'react';
import ReactDOM from 'react-dom';
import Username from './components/username';
import Password from './components/password';
import Login from './components/login';
import Checkbox from './components/checkbox'
import {Container} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container maxWidth='xs' style={{backgroundColor:"skyblue"}}>
        <Username></Username>
        <Password></Password>
        <Login></Login>
        <Checkbox></Checkbox>
        <TransactionHistory />
      </Container>
    </div>
  );
}

export default App;
