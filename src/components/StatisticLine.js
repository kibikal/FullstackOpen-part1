import React from "react";

function Results({ text, value }) {
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  );
}

export default Results;
