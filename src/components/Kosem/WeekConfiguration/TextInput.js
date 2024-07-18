import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useData } from "../Kosem";

function TextInput(props) {
  const [val, setVal] = useState("1");
  const { loadedData_DB } = useData();

  // useEffect to update the state when loadedData_DB changes
  useEffect(() => {
    if (loadedData_DB) {
      setVal(loadedData_DB.config.ShiftsNeeds[props.dayTag][props.inputId]);
    }
  }, [loadedData_DB]);

  function valChange(ev) {
    const updatedVal = ev.target.value;
    setVal(updatedVal);
    props.dayNeedsInput_Local(props.inputId, updatedVal);
  }

  return (
    <>
      <Form.Control
        type="text"
        id={"inputText_Needs_" + props.dayTag + "_" + props.inputId}
        aria-describedby="passwordHelpBlock"
        value={val}
        size="sm"
        style={{ width: "30px" }}
        onChange={valChange}
      />
    </>
  );
}

export default TextInput;
