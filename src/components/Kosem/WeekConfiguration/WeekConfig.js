import Accordion from "react-bootstrap/Accordion";
import DayNeedsInput from "./DayNeedsInput";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import LoadDataModal from "./LoadDataModal";
import Modal from "react-bootstrap/Modal";

function WeekConfig(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Row className="align-items-center">
        <Col xs={6} className="mb-4">
          <Form.Control
            type="text"
            id="inputText_WeekName"
            placeholder="Enter week number"
            style={{ textAlign: "center" }}
            size="sm"
            value={props.weekName}
            onChange={props.changedWeekName}
            autoFocus
          />
        </Col>
        {props.weekName && (
          <>
            <Col xs={3} className="mb-4">
              <LoadDataModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                weekName={props.weekName}
                setloadData_attempt={props.setloadData_attempt}
                loadData_attempt={props.loadData_attempt}
              />
            </Col>
          </>
        )}
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
