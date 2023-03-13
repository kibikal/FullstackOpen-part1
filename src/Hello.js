import React from "react";

function Hello({name, age}) {
 
  const bornYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - age;
  };




  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
}

export default Hello;
