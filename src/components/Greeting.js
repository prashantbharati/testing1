import React, { useState } from "react";

const Greeting = () => {
  const [completed, setCompleted] = useState(false);

  const changecompleted = () => {
    setCompleted(true);
  };

  return (
    <div>
      <p>Hey this is before case</p>
      {console.log(completed)}
      {completed && <p>This is changed case</p>}

      <button onClick={changecompleted}>click me change the state</button>
    </div>
  );
};

export default Greeting;
