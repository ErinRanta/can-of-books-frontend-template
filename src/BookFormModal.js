import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" placeholder="The Count of Monte Cristo" onChange={this.props.onChange}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" placeholder="Redemption, tragedy, adventure, and love." onChange={this.props.onChange}/>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Status</Form.Label>
                <Form.Control name="status" placeholder="read" onChange={this.props.onChange}/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.add}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    )
  }
}

export default BookFormModal;