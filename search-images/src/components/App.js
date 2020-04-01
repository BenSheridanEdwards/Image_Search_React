import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('http://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID nxizvN0EQ5CSyOP4rQGgYV03c28f0LNGIRRSlEojTj8' 
       }
    });
  }

  render () {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
