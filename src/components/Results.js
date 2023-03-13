import React from "react";

function Results({text, numberOfVotes}) {
  return <div>
    <p>{text} {numberOfVotes} </p>
  </div>;
}

export default Results;
