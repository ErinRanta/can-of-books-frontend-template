import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  async pullBooks() {
    let url = 'I couldn\'t deploy on Heroku because the repo was not in my GitHub...';
    let response = await axios.get(url);
    this.setState({
      books: response.data
    })
  }
  
  componentDidMount() {
    this.pullBooks()
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
