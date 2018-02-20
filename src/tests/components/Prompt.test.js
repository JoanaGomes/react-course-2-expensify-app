import React from 'react';
import { shallow } from 'enzyme';
import Prompt from '../../components/Prompt';

test('should render Prompt correctly', () => {
  const wrapper = shallow(<Prompt visible={ true } onCancel={() => {}} title='prompt title' content='test prompt' />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Prompt with a single button', () => {
  const buttons = [
    {
      label: 'button',
      id: 'prompt-btn',
      onClick: () => {}
    }
  ];

  const wrapper = shallow(<Prompt visible={ true } onCancel={() => {}} title='prompt title' content='test prompt' options={ buttons } />);
  expect(wrapper).toMatchSnapshot();
});

test('should call button callback', () => {
  const callback = jest.fn();
  const buttons = [
    {
      label: 'button',
      id: 'prompt-btn',
      onClick: callback
    }
  ];

  const wrapper = shallow(<Prompt visible={ true } onCancel={() => {}} title='prompt title' content='test prompt' options={ buttons } />);
  wrapper.find('#prompt-btn').simulate('click');
  expect(callback).toHaveBeenCalled();
});