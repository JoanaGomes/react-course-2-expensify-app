import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal, totalExpenses }) => {
  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>Viewing <span>{ expensesCount }</span> of { totalExpenses } expenses, totalling <span>{ numeral(expensesTotal / 100).format('$0,0.00') }</span></h1>
        <div className='page-header__actions'>
          <Link className='button' to='/create'>Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: totalExpenses(visibleExpenses),
    totalExpenses: state.expenses.length || 0
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
