import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE'});
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(state, { type: 'SET_TEXT_FILTER', text: 'rent'});
  expect(state.text).toBe('rent');
});

test('should set start date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const startDate = moment();
  const state = filtersReducer(currentState, { type: 'SET_START_DATE', startDate});
  expect(state.startDate).toBe(startDate);
});

test('should set end date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const endDate = moment();
  const state = filtersReducer(currentState, { type: 'SET_END_DATE', endDate});
  expect(state.endDate).toBe(endDate);
});