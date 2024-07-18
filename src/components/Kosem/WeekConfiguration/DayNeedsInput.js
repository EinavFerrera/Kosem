import { useEffect } from "react";
import TextInput from "./TextInput";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function DayNeedsInput(props) {
  let dayNeedsObj = { 1: "1", 2: "1", 3: "1" };

  function dayNeedsInput_Local(inputId, num) {
    dayNeedsObj[inputId] = num;
    props.saveConfig_Local(dayNeedsObj, props.dayTag);
  }

  //first call on default
  useEffect(() => {
    dayNeedsInput_Local(1, "1");
  }, []);

  return (
    <Container className="p-0">
      <Row className="justify-content-center">
        <Form.Label>{props.dayTag}</Form.Label>
        <Col className="p-0" xs="auto">
          <TextInput
            dayTag={props.dayTag}
            inputId={1}
            dayNeedsInput_Local={dayNeedsInput_Local}
          />
        </Col>
        <Col className="p-0" xs="auto">
          <TextInput
            dayTag={props.dayTag}
            inputId={2}
            dayNeedsInput_Local={dayNeedsInput_Local}
          />
        </Col>
        <Col className="p-0" xs="auto">
          <TextInput
            dayTag={props.dayTag}
            inputId={3}
            dayNeedsInput_Local={dayNeedsInput_Local}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DayNeedsInput;
