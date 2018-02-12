import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('shouçd generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('shouçd generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('shouçd generate set text filter action object with text value', () => {
  const action = setTextFilter('rent');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  });
});

test('shouçd generate set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate set sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate set sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});