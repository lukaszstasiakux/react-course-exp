import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpensesListFilters';
import ExpenssesSummary from './ExpensesSummary';

 const ExpenseDashboardPage = () => (
  <div> 
    <ExpenssesSummary />
    <ExpenseListFilters />
    <ExpenseList/>
  </div>
);
export default ExpenseDashboardPage;