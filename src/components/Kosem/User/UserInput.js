import React, { useState } from "react";
// import "./App.css"; // Assuming you have some CSS file for styling

function UserInput(props) {
  const emptyObj = {
    userName: "",
    maxShifts: "",
    minShifts: "",
    days: {
      Sunday: [false, false, false],
      Monday: [false, false, false],
      Tuesday: [false, false, false],
      Wednesday: [false, false, false],
      Thursday: [false, false, false],
      Friday: [false, false, false],
      Saturday: [false, false, false],
    },
  };
  const [formValues, setFormValues] = useState(emptyObj);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleCheckboxChange(day, index) {
    const newDays = { ...formValues.days };
    newDays[day][index] = !newDays[day][index];
    setFormValues({ ...formValues, days: newDays });
  }

  function checkFullDay(day) {
    const newDays = { ...formValues.days };
    newDays[day] = newDays[day].map((shift) => !shift);
    setFormValues({ ...formValues, days: newDays });
  }
  function checkAll() {
    let newDays = { ...formValues.days };
    Object.keys(newDays).forEach((key) => {
      newDays[key] = newDays[key].map((shift) => !shift);
    });
    setFormValues({ ...formValues, days: newDays });
  }

  function addUser() {
    props.saveUser_Local(formValues);
    setFormValues(emptyObj);
  }

  return (
    <section className="user-input">
      <form id="userInputForm" className="container">
        <div className="row g-5 justify-content-center">
          <div className="col-6 col-md-3 col-xl-2">
            <label htmlFor="userName" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="form-control"
              value={formValues.userName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-6 col-md-3 col-xl-2">
            <label htmlFor="maxShifts" className="form-label">
              Max Shifts:
            </label>
            <div
              className="btn-group"
              role="group"
              style={{ border: "#dee2e6 solid 1px" }}
            >
              <input
                type="text"
                id="maxShifts"
                name="maxShifts"
                className="form-control"
                style={{ border: "none" }}
                value={formValues.maxShifts}
                onChange={handleInputChange}
              />
              {/* Min shifts button - disabled for version 0.0 */}
              {/* <button
                type="button"
                className="btn btn-light dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropend</span>
              </button>
              <div
                className="dropdown-menu w-25"
                style={{ backgroundColor: "rgba(0, 0, 0, 0)", border: "0px" }}
              >
                <div className="input-group mb">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                    style={{ backgroundColor: "#ebe9e4" }}
                  >
                    Min Shifts
                  </span>
                  <input
                    type="text"
                    id="minShifts"
                    name="minShifts"
                    className="form-control"
                    value={formValues.minShifts}
                    onChange={handleInputChange}
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-md-3 align-self-center text-center">
            <button
              type="button"
              className="btn btn-outline-dark mouseo"
              onClick={() => checkAll()}
              style={{ fontSize: "0.7rem", width: "5.5rem" }}
            >
              Check All
            </button>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-12 text-center gy-5">
            {[
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map((day) => (
              <div
                key={day}
                className="d-inline-flex flex-column align-items-center"
              >
                <label
                  id={day}
                  className="btn-outline-dark m-2"
                  onClick={() => checkFullDay(day)}
                >
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </label>
                <div className="d-flex p-2">
                  <div
                    className="btn-group mx-auto"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    {formValues.days[day].map((checked, index) => (
                      <React.Fragment key={index}>
                        <input
                          type="checkbox"
                          className="btn-check"
                          id={`${day}${index + 1}Checkbox`}
                          checked={checked}
                          onChange={() => handleCheckboxChange(day, index)}
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor={`${day}${index + 1}Checkbox`}
                        ></label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row g-3">
          <div className="col-12 text-center gy-4">
            <button
              type="button"
              className="btn btn-outline-dark mouseo fs-6"
              onClick={addUser}
            >
              insert
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default UserInput;
