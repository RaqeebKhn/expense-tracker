import React from 'react';
import { Header } from './Componenets/Header';
import { Balance } from './Componenets/Balance';
import { IncomeExpenses } from './Componenets/IncomeExpenses';
import { TransactionList } from './Componenets/TransactionList';
import AddTransaction from './Componenets/AddTransaction';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
