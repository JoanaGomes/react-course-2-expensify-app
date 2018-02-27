import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test("should return zero when the expense list isn't provided", () => {
  const result = selectExpensesTotal();
  expect(result).toEqual(0);
});

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toEqual(0);
});

test('should add up a single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toEqual(195);
});

test('should correctly add up multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(204195);
});
