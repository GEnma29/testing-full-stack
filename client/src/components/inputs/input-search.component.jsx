import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const InputSearchComponent = ({setFile }) => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        onChange={(e)=>{
          setFilter(e.target.value)
        }}
        aria-describedby="basic-addon2"
      />
      <InputGroup.Text id="basic-addon2">example: test2.csv</InputGroup.Text>
    </InputGroup>
  );
};

export default InputSearchComponent;
