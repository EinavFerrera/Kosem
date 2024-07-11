import Accordion from "react-bootstrap/Accordion";
import DayNeedsInput from "./DayNeedsInput";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function WeekConfig(props) {
  const [weekName, setWeekName] = useState("");
  const [warningClass, setWarningClass] = useState("warning");
  const [implementWarningClass, setImplementWarningClass] = useState("");

  function changedWeekName(e) {
    setWarningClass("");
    setWeekName(e.target.value);
    props.setWeekNumber(e.target.value);
  }

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header
          className={implementWarningClass}
          style={{ textAlign: "center" }}
          onClick={() => {
            setImplementWarningClass(warningClass);
            props.saveToDB();
          }}
        >
          Table Configuration
        </Accordion.Header>
        <Accordion.Body>
          <Row className="justify-content-md-center">
            <Col xs={3}>
              <Form.Control
                className="mb-4"
                type="text"
                id={"inputText_Needs_" + props.inputId}
                placeholder="Enter Week Number"
                style={{ textAlign: "center" }}
                value={weekName}
                onChange={changedWeekName}
                autoFocus
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4} lg="auto">
              <DayNeedsInput dayTag="Sunday" setNeeds={props.setNeeds} />
            </Col>
            <Col>
              <DayNeedsInput dayTag="Monday" setNeeds={props.setNeeds} />
            </Col>
            <Col xs={4} lg="auto">
              <DayNeedsInput dayTag="Tuesday" setNeeds={props.setNeeds} />
            </Col>
            <Col xs={4} lg="auto">
              <DayNeedsInput dayTag="Wednesday" setNeeds={props.setNeeds} />
            </Col>
            <Col xs={4} lg="auto">
              <DayNeedsInput dayTag="Thursday" setNeeds={props.setNeeds} />
            </Col>
            <Col xs={4} lg="auto">
              <DayNeedsInput dayTag="Friday" setNeeds={props.setNeeds} />
            </Col>
            <Col xs={4} lg="auto">
              <DayNeedsInput dayTag="Saturday" setNeeds={props.setNeeds} />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header
          style={{ textAlign: "center" }}
          onClick={() => {
            setImplementWarningClass(warningClass);
            props.saveToDB();
          }}
        >
          Users
        </Accordion.Header>
        <Accordion.Body>What what</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header
          style={{ textAlign: "center" }}
          onClick={() => {
            setImplementWarningClass(warningClass);
            props.saveToDB();
          }}
        >
          Results
        </Accordion.Header>
        <Accordion.Body>What what</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default WeekConfig;
