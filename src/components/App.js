import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
        params: { query: term }
    });

    this.setState({ images: response.data.results });
  }

  render () {
    return (
      <div className="ui container" style={{ marginTop: '10px'}} data-test="component-app">
        <SearchBar onSubmit={this.onSearchSubmit} data-test="component-search-bar" />
        <ImageList images={this.state.images} data-test="component-image-list" />
      </div>
    );
  }
}

export default App;
