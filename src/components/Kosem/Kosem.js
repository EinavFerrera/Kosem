import React, { createContext, useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Accordion from "react-bootstrap/Accordion";
import WeekConfig from "./WeekConfiguration/WeekConfig";
import User from "./User/User";
import { db } from "../../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

function Kosem() {
  let year = new Date().getFullYear();

  const [needsObj, setNeedsObj] = useState({});
  const [usersArr, setUsersArr] = useState([]);
  const [dataChangeCounter, setDataChangeCounter] = useState(false);
  const [weekName, setWeekName] = useState("");
  const [warningClass, setWarningClass] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadData_attempt, setloadData_attempt] = useState(false);
  const [loadedData_DB, setLoadedData_DB] = useState(null);
  const contextValue = {
    loadedData_DB: loadedData_DB,
  };

  useEffect(() => {
    async function getData() {
      const docRef = doc(db, "config", year + "_week_" + weekName);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setLoadedData_DB(docSnap.data());
        setIsLoaded(true);
        setUsersArr(docSnap.data().users);
        setNeedsObj(docSnap.data().config.ShiftsNeeds);
      } else {
        console.log("No such document!");
        setIsLoaded(false);
        if (weekName) {
          document.getElementById("inputText_WeekName").placeholder =
            "Week not found";
          document.getElementById("inputText_WeekName").value = "";
        }
      }
    }
    getData();
    // eslint-disable-next-line
  }, [loadData_attempt]);

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
        console.log("in SAveDB:", data.config.ShiftsNeeds);
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
    if (weekName) {
      setDataChangeCounter(true);
    }
    let tempObj = needsObj;
    tempObj[weekdayName] = needsArray;
    setNeedsObj(tempObj);
  }
  function changedWeekName(e) {
    changeWarningCSS(e.target.value);
    setWeekName(e.target.value);
    setDataChangeCounter(true);
  }
  function changeWarningCSS(text) {
    if (text !== "") setWarningClass("");
    else setWarningClass("warning");
  }
  function saveUser_Local(userObject) {
    setUsersArr([...usersArr, userObject]);
    console.log(usersArr);
    setDataChangeCounter(true);
  }

  return (
    <DataContext.Provider value={contextValue}>
      <Container fluid className="project-section">
        <Particle />
        <Container className="z-ind">
          <>
            {isLoaded ? (
              <h1 className="project-heading">
                Edit <strong className="purple">{weekName}</strong> week's Table
              </h1>
            ) : (
              <h1 className="project-heading">
                Create <strong className="purple">New</strong> Table
              </h1>
            )}
          </>
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
                  setloadData_attempt={setloadData_attempt}
                  loadData_attempt={loadData_attempt}
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
                <User
                  saveUser_Local={saveUser_Local}
                  setUsersArr={setUsersArr}
                  usersArr={usersArr}
                />
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
    </DataContext.Provider>
  );
}

export default Kosem;
