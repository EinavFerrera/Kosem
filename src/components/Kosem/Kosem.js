import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import WeekConfig from "./WeekConfiguration/WeekConfig";
import { db } from "../../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

function Kosem() {
  let dataChangeCounter = false;
  let needsObj = {};
  let weekNumber;
  let year = new Date().getFullYear();

  async function saveData() {
    const data = {
      year: year,
      weekNumber: weekNumber,
      ShiftsNeeds: needsObj,
    };
    try {
      await setDoc(
        doc(db, "config/" + year + "_week_" + data.weekNumber),
        data
      );
    } catch {
      console.log("check if weeknumber is missing");
    }
  }

  function setNeeds(needsArray, weekdayName) {
    weekNumber && (dataChangeCounter = true);
    needsObj[weekdayName] = needsArray;
  }
  function setWeekNumber(weekNum) {
    dataChangeCounter = true;
    weekNumber = weekNum;
    console.log(weekNumber);
  }
  function saveToDB() {
    console.log(dataChangeCounter);
    try {
      dataChangeCounter && saveData();
      dataChangeCounter = false;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="z-ind">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <WeekConfig
          setNeeds={setNeeds}
          setWeekNumber={setWeekNumber}
          saveToDB={saveToDB}
        />
      </Container>
    </Container>
  );
}

export default Kosem;
