import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test/testUtils';

import ImageList from './ImageList';

const defaultProps = {
  images: [{ id: "image" }]
}

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<ImageList { ...setupProps } />)
}

it('does not throw warning with expected props', () => {
  checkProps(ImageList, defaultProps)
})

describe('When the user searches and is returned a list of images', () => {
  let wrapper 
  beforeEach(() => {
    wrapper = setup([{ id: "image.jpg" }])
  })

  it('renders component without error', () => {
    const component = findByTestAttr(wrapper, 'image')
    expect(component.length).toBe(1)
  })

  it('renders an image card', () => {
    const imageList = findByTestAttr(wrapper, 'image')
    expect(imageList.text()).toBe("<ImageCard />")
  })
})
