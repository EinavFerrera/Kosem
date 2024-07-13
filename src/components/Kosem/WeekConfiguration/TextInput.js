import { useState } from "react";
import Form from "react-bootstrap/Form";

function TextInput(props) {
  const [val, setVal] = useState("1");

  function valChange(ev) {
    const updatedVal = ev.target.value;
    setVal(updatedVal);
    props.saveConfig_Local_DayNeedsInput(props.inputId, updatedVal);
  }

  return (
    <>
      <Form.Control
        type="text"
        id={"inputText_Needs_" + props.inputId}
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
