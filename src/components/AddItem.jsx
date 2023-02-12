import React from "react";
import { Button, Modal } from "react-bootstrap";

function AddItem() {
  return (
    <div>
      <Button
        onClick={() => {
          this.handleModal();
        }}
      >
        Open Modal
      </Button>
      <Modal show={this.state.show}>
        <Modal.Header> Modal Head Part</Modal.Header>
        <Modal.Body>Hi, React Modal is here</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              this.handleModal();
            }}
          >
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AddItem;
