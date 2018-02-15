import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  return (
    <div>
      <h1>Viewing { expensesCount } { expenseWord } totalling { numeral(expensesTotal / 100).format('$0,0.00') }</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: totalExpenses(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
