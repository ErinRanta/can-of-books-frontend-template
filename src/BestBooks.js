import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';
import BookFormModalEdit from './BookFormModalEdit';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show2: false,
      books: [],
      title: '',
      description: '',
      status: '',
      currentSlide: 0,
      id: ''
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
        this.setState({ books: [...this.state.books, response.data] });
      });
  }

  deleteBook = (e) => {
    e.preventDefault();
    let id = this.state.books[this.state.currentSlide]._id
    console.log(id)
    axios.delete(`https://can-of-books-backened.herokuapp.com/book/${id}`)
      .then(response => {
        console.log(response);
        this.setState({ books: response.data });
      });
  }

  editBook = (e) => {
    e.preventDefault();
    let id = this.state.id;
    let book = {
      title: this.state.title,
      description: this.state.description,
      status: this.state.status,
    }
    console.log(id)
    axios.put(`https://can-of-books-backened.herokuapp.com/book/${id}`, book)
      .then(response => {
        console.log(response);
        this.setState({ books: response.data });
      });
  }

  handleChange = (e) => {
    console.log(e);
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleClick = (e) => {
    let id = e.target;
    console.log(e);
    this.setState({ currentId: id })
  }

  handleSlide = async (e) => {
    console.log(e)
    await this.setState({ currentSlide: e })
    console.log(this.state.currentSlide)
  }

  handleClose = (e) => {
    // e.preventDefault();
    this.setState({ show: false });
  }
  handleClose2 = (e) => {
    // e.preventDefault();
    this.setState({ show2: false });
  }

  handleNew = (e) => {
    // e.preventDefault();
    this.setState({ show: true });
  }
  handleEdit = (e) => {
    e.preventDefault();
    this.setState({ show2: true });
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button onClick={this.handleNew}>Add Book!</Button>
        <Button onClick={this.handleEdit}>Edit Book</Button>

        <BookFormModal onChange={this.handleChange} close={this.handleClose} add={this.addBook} show={this.state.show}/>
        <BookFormModalEdit onChange={this.handleChange} close={this.handleClose2} edit={this.editBook} show={this.state.show2}/>

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
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}


export default BestBooks;
