import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={ 1 } expensesTotal={ 235 } />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={ 23 } expensesTotal={ 23512340987 } />);
  expect(wrapper).toMatchSnapshot();
});