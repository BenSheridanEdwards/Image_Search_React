import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';

import SearchBar from './SearchBar';

const setup = (props={}, state=null) => {
  const wrapper = shallow(<SearchBar {...props} />)
  if (state) wrapper.setState(state)
    return wrapper;
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-search-bar');
  expect(appComponent.length).toBe(1);
});