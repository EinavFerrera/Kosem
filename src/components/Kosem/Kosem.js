import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Accordion from "react-bootstrap/Accordion";
import WeekConfig from "./WeekConfiguration/WeekConfig";
import User from "./User/User";
import { db } from "../../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

function Kosem() {
  let needsObj = {};
  let weekNumber;

  let year = new Date().getFullYear();
  const [usersArr, setUsersArr] = useState([]);
  const [dataChangeCounter, setDataChangeCounter] = useState(false);
  const [weekName, setWeekName] = useState("");
  const [warningClass, setWarningClass] = useState("");

  async function save_DB() {
    const data = {
      config: {
        year: year,
        weekNumber: weekName,
        ShiftsNeeds: needsObj,
      },
      users: usersArr,
      result: {},
    };
    if (dataChangeCounter) {
      try {
        await setDoc(
          doc(
            db,
            "config/" + data.config.year + "_week_" + data.config.weekNumber
          ),
          data
        );
        setDataChangeCounter(false);
        console.log("Saved to DB!");
      } catch (e) {
        console.error(e);
      }
    }
  }
  function saveConfig_Local(needsArray, weekdayName) {
    if (weekNumber) setDataChangeCounter(true);
    needsObj[weekdayName] = needsArray;
  }
  function changedWeekName(e) {
    changeWarningCSS(e.target.value);
    setWeekName(e.target.value);
    setDataChangeCounter(true);
  }
  function changeWarningCSS(text) {
    if (text != "") setWarningClass("");
    else setWarningClass("warning");
  }
  function saveUser_Local(userObject) {
    setUsersArr([...usersArr, userObject]);
    console.log(usersArr);
    setDataChangeCounter(true);
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="z-ind">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header
              className={warningClass}
              style={{ textAlign: "center" }}
              onClick={() => {
                changeWarningCSS(weekName);
                save_DB();
              }}
            >
              Table Configuration
            </Accordion.Header>
            <Accordion.Body>
              <WeekConfig
                weekName={weekName}
                changedWeekName={changedWeekName}
                saveConfig_Local={saveConfig_Local}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header
              style={{ textAlign: "center" }}
              onClick={() => {
                changeWarningCSS(weekName);
                save_DB();
              }}
            >
              Users
            </Accordion.Header>
            <Accordion.Body>
              <User saveUser_Local={saveUser_Local} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header
              style={{ textAlign: "center" }}
              onClick={() => {
                changeWarningCSS(weekName);
                save_DB();
              }}
            >
              Results
            </Accordion.Header>
            <Accordion.Body>I AM NOTT</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </Container>
  );
}

export default Kosem;
