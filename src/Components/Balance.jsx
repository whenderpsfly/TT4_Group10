import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './Balance.css';

function Balance() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const Account = ({ name, number, balance }) => {
    return (
    <div class = "account">
      <table>
      <col width="500px" />
        <tr>
          <td>{name}</td>
          <td>Balance</td>
        </tr>
        <tr>
          <td>{number}</td>
          <td>${balance}</td>
        </tr>
      </table>
    </div>
  )};

  useEffect(() => {
    const requestOptions = {
        method: 'POST',
        headers: {'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy'},
        body: JSON.stringify({custID:10,accountKey:"ubrvt7g7-tb80-jtjv-d49e-yrwbyi5tuki"})
    };
    fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts', requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {
          setError(error);
          return <div>Error: {error.message}</div>;
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        {items.map((account) => (
          <Account
            name={account.accountName}
            number={account.accountNumber}
            balance={Math.round(account.availableBal * 100) / 100}
          />
        ))}
      </div>
);
  }
}
export default Balance;
