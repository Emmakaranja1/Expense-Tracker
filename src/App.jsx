import { useState } from 'react';
import ReactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'
import './App.css';
import  Header from './components/Header.jsx';
import  ExpenseForm from './components/ExpenseForm.jsx'
import  ExpensesTable from './components/ExpensesTable.jsx';



function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  

  function handleAddExpense(newExpense) {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  }
  

  return (
    <>
      <Header />
      <div className="main-content"></div>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpensesTable expenses={expenses} />
    
   
    </>
  );
}

export default App;
