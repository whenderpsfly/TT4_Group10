import logo from './logo.svg';
import './App.css';
import TransactionHistory from './Components/transactionhistory'
import React, {useState} from 'react';
import Login from './Login'
import Transfer from './Transfer';
import ReactDOM from 'react-dom';
import Username from './Components/username';
import Password from './Components/password';
import Login from './Components/login';
import Checkboxes from './Components/checkbox'
import {Container} from '@material-ui/core';

export const UserContext = React.createContext({
  user: {custID:0, accountKey: ""},
  setUser: () => {}
});

function App() {
  const [user, setUser] = useState({custID:0, accountKey:""})
  const value = { user, setUser }

  return (
    <div className="App">
      <Container maxWidth='xs' style={{backgroundColor:"skyblue"}}>
        <UserContext.Provider value={value}>
          <Username/>
          <Password/>
          <Login/>
          <Checkboxes/>
          <TransactionHistory />
        </UserContext.Provider>
      </Container>
      <Login></Login>
    </div>
  );
}

export default App;

