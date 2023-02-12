import React from "react";
import { Button, Modal } from "react-bootstrap";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <div className="content">
          <h2 className="mar-left">Contact</h2>
          <Button
            className="mar-right"
            onClick={() => {
              this.handleModal();
            }}
          >
            Add
          </Button>
        </div>

        <Modal show={this.state.show}>
          <Modal.Header className="m-header"> INPUT CONTACT:</Modal.Header>
          <Modal.Body>
            <form>
              <div className="input-info">
                <label for="fname">Full Name:</label>
                <br />
                <input
                  type="text"
                  placeholder="Family Name, Given Name M.I."
                  // value="fName"
                ></input>
                <br />
                <label for="cNumber">Contact:</label>
                <br />
                <input
                  type="text"
                  placeholder="Phone number"
                  // value="cNumber"
                ></input>
                <br />
                <label for="fname">Email:</label>
                <br />
                <input
                  type="text"
                  placeholder="(example@gmail.com)"
                  // value="email"
                ></input>
                <br />
                <label for="fBook">Facebook:</label>
                <br />
                <input
                  type="text"
                  placeholder="Facebook Name"
                  // value="fBook"
                ></input>
                <br />
              </div>
              <div></div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.handleModal();
              }}
            >
              Close
            </Button>
            <Button>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default App;
