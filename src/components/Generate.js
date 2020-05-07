import React from 'react';



const generate = (props) => {

  return (
    <div className="container">
      <div
        className="button generate"
        onClick={props.click}>
        GENERATE
      </div>
    </div>
  );
}

export default generate;