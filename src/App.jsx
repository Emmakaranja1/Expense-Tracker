import { useState } from 'react';
import './App.css';
import  Header from './components/Header.jsx';
import  ExpenseForm from './components/ExpenseForm.jsx'
import  ExpensesTable from './components/ExpensesTable.jsx';
import SearchBar from './components/SearchBar.jsx';
import SortDropdown from './components/SortDropdown.jsx';



function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  

  function handleAddExpense(newExpense) {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  }

  function handleDeleteExpense(indexToDelete) {
    setExpenses((prev) => prev.filter((_, index) => index !== indexToDelete));
  }

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "description") {
      return a.description.localeCompare(b.description);
    }
    return 0;
  });
  

  return (
    <>
      <Header />
      <div className="main-content"></div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} /> 
      <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpensesTable expenses={sortedExpenses} onDeleteExpense={handleDeleteExpense} />
    
   
    </>
  );
}

export default App;
