import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';

import ImageCard from './ImageCard';

const defaultProps = {
  images: [{ id: "image" }]
}

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<ImageCard { ...setupProps } />)
}

it('does not throw warning with expected props', () => {
  checkProps(ImageCard, defaultProps)
})