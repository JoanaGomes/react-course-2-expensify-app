import React from 'react';
import { shallow } from 'enzyme';
import Prompt from '../../components/Prompt';

test('should render Prompt correctly', () => {
  const wrapper = shallow(<Prompt visible={ true } onCancel={() => {}} title='prompt title' content='test prompt' />);
  expect(wrapper).toMatchSnapshot();
});