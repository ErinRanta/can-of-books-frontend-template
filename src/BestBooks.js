import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      title: '',
      description: '',
      status: '',
      currentSlide: 0
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

  addBook = (e) => {
    e.preventDefault();
    console.log(e)
    let book = {
      title: this.state.title,
      description: this.state.description,
      status: this.state.status,
    }

    axios.post('https://can-of-books-backened.herokuapp.com/book', book)
      .then(response => {
        console.log(response);
        this.setState({ list: [...this.state.books, response.data] });
      });
  }

  deleteBook = (e) => {
    e.preventDefault();
    let id = this.state.books[this.state.currentSlide]._id
    console.log(id)
    axios.delete(`https://can-of-books-backened.herokuapp.com/book/${id}`)
    .then(response => {
      console.log(response);
      this.setState({ list: response.data });
    });
  }
 



handleChange = (e) => {
  let {name, value} = e.target;
  this.setState({ [name]: value });
}

handleClick = (e) => {
  let id = e.target;
  console.log(e);
  this.setState({currentId: id})
}

handleSlide = async (e) => {
  console.log(e)
  await this.setState({currentSlide: e})
  console.log(this.state.currentSlide)
}







  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <form onSubmit={this.addBook}>
          <input type='text' name="title" onChange={this.handleChange}/>
          <input type='text' name="description" onChange={this.handleChange} />
          <input type='text' name="status" onChange={this.handleChange} />
          <button type="submit">Create Book!</button>
        </form>
           {console.log(this.state.books)}
        {this.state.books.length ? (
          <Carousel onSlide={this.handleSlide}>

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
                  <button onClick={this.deleteBook}>Delete</button>
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
