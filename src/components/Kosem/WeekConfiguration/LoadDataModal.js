import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useData } from "../Kosem";

function LoadDataModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="btn-sm">
        Load
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Load week {props.weekName}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            You can view, edit and regenrates this week.
            <br /> Note that once you edit the week, the old results
            <strong> will not be available!</strong>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary-outline" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.setloadData_attempt(!props.loadData_attempt);
              setShow(false);
            }}
          >
            Sure
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoadDataModal;
