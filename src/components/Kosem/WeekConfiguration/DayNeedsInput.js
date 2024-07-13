import TextInput from "./TextInput";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function DayNeedsInput(props) {
  let dayNeedsObj = { 1: "1", 2: "1", 3: "1" };

  function saveConfig_Local_DayNeedsInput(inputId, num) {
    dayNeedsObj[inputId] = num;
    props.saveConfig_Local(dayNeedsObj, props.dayTag);
  }

  //first call on default
  saveConfig_Local_DayNeedsInput(1, "1");
  return (
    <Container className="p-0">
      <Row className="justify-content-center">
        <Form.Label>{props.dayTag}</Form.Label>
        <Col className="p-0" xs="auto">
          <TextInput
            inputId={1}
            saveConfig_Local_DayNeedsInput={saveConfig_Local_DayNeedsInput}
          />
        </Col>
        <Col className="p-0" xs="auto">
          <TextInput
            inputId={2}
            saveConfig_Local_DayNeedsInput={saveConfig_Local_DayNeedsInput}
          />
        </Col>
        <Col className="p-0" xs="auto">
          <TextInput
            inputId={3}
            saveConfig_Local_DayNeedsInput={saveConfig_Local_DayNeedsInput}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DayNeedsInput;
