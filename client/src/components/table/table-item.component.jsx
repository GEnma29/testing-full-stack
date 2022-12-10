import React from "react";

const TableItemComponent = ({ fileName, Text, Number, Hex }) => {
  return (
    <tr>
      <td>{fileName}</td>
      <td>{Text}</td>
      <td>{Number}</td>
      <td>{Hex}</td>
    </tr>
  );
};

export default TableItemComponent;
