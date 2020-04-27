import React from 'react';
import { shallow, mount } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';

import ImageCard from './ImageCard';

const defaultProps = {
  images: [{ key: "1", id: "image" }]
}

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return mount(<ImageCard { ...setupProps } />, { disableLifecycleMethods: true })
}

it('does not throw warning with expected props', () => {
  checkProps(ImageCard, defaultProps)
})


it('renders ImageCard component', () => {
  const image = { id: "1", description: "image", urls: { regular: "123"}  }
  const wrapper = setup({key: "1", image: image})
  const componentImageCard = findByTestAttr(wrapper, 'component-image-card')
  expect(componentImageCard.length).toBe(1);
});

describe("when a image has been passed into the image card", () => {
  let wrapper
  beforeEach(() => {
    const image = { id: "1", description: "image", urls: { regular: "123"}  }
    wrapper = setup({key: "1", image: image})
  })

  it("should call the setSpans function to calulate the spans, and set it to the state object", () => {
    expect(wrapper.state()).toEqual({ spans: 0 })
    wrapper.instance().setSpans(200)
    expect(wrapper.state()).toEqual({ spans: 20 })
  });
})
