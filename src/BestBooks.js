import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  async pullBooks() {
    let url = 'https://can-of-books-backened.herokuapp.com/books';
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
        {console.log(this.state.books)}
        {this.state.books.length ? (
          <Carousel>

            {this.state.books.map(element =>
              <Carousel.Item key={element.title}>
                <img
                  src="https://place-hold.it/2000x400/blue/white"
                  alt="placeholder background"
                />
                <Carousel.Caption>
                  <h1>{element.title}</h1>
                  <h2>{element.description}</h2>
                  <h3>{element.status}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            )}
            {/* {console.log(this.state.books)} */}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
