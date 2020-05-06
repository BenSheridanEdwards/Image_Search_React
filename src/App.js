import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageList from './components/ImageList/ImageList';

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (term) => {
    const baseURL = "https://api.unsplash.com"
    const response = await axios.get(baseURL + '/search/photos', {
        params: { 
          query: term,
          client_id: process.env.REACT_APP_UNSPLASH_TOKEN
      }
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
