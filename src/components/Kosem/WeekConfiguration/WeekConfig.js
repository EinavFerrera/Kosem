import Accordion from "react-bootstrap/Accordion";
import DayNeedsInput from "./DayNeedsInput";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function WeekConfig(props) {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={7} md={4}>
          <Form.Control
            className="mb-4"
            type="text"
            id={"inputText_WeekName"}
            placeholder="Enter Week Number"
            style={{ textAlign: "center" }}
            value={props.weekName}
            onChange={props.changedWeekName}
            autoFocus
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4} lg="auto">
          <DayNeedsInput
            dayTag="Sunday"
            saveConfig_Local={props.saveConfig_Local}
          />
        </Col>
        <Col>
          <DayNeedsInput
            dayTag="Monday"
            saveConfig_Local={props.saveConfig_Local}
          />
        </Col>
        <Col xs={4} lg="auto">
          <DayNeedsInput
            dayTag="Tuesday"
            saveConfig_Local={props.saveConfig_Local}
          />
        </Col>
        <Col xs={4} lg="auto">
          <DayNeedsInput
            dayTag="Wednesday"
            saveConfig_Local={props.saveConfig_Local}
          />
        </Col>
        <Col xs={4} lg="auto">
          <DayNeedsInput
            dayTag="Thursday"
            saveConfig_Local={props.saveConfig_Local}
          />
        </Col>
        <Col xs={4} lg="auto">
          <DayNeedsInput
            dayTag="Friday"
            saveConfig_Local={props.saveConfig_Local}
          />
        </Col>
        <Col xs={4} lg="auto">
          <DayNeedsInput
            dayTag="Saturday"
            saveConfig_Local={props.saveConfig_Local}
          />
        </Col>
      </Row>
    </>
  );
}

export default WeekConfig;
