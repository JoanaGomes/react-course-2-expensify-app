import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense', () => {
  const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove exoenses if id not found', () => {
  const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '123abc' });
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '31',
    description: 'Book',
    note: '',
    amount: 3000,
    createdAt: 0
  };

  const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
  expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      note: 'test note'
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe('test note');
});

test('should not edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      note: 'test note'
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});