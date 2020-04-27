import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';
import SearchBar from './SearchBar';
import mockAxios from 'axios'

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
    return wrapper;
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders the SearchBar component', () => {
  const wrapper = setup()
  const searchBar = findByTestAttr(wrapper, "component-search-bar")
  expect(searchBar.text()).toBe("<SearchBar />")
})

test('renders the ImageList component', () => {
  const wrapper = setup()
  const imageList = findByTestAttr(wrapper, "component-image-list")
  expect(imageList.text()).toBe("<ImageList />")
})

it('calls axios and returns images', async () => {
  mockAxios.get.mockImplementationOnce(() => 
    Promise.resolve({
      data: {
        results: ["cute.jpg"]
      }
    })
  )
 
  const wrapper = setup()
  const images = await wrapper.instance().onSearchSubmit('kittens')
  expect(wrapper.state()).toEqual({"images": ["cute.jpg"]})
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith("https://api.unsplash.com/search/photos", 
    {
      params: {
        client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
        query: "kittens"
      }
    }
  );
})
