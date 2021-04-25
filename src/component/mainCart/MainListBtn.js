import React, { useState } from "react";

const MainListBtn = (props) => {
  // const [count, setcount] = useState()

  const addbtn = (
    <button className="mainbtn" onClick={props.handleIncrementBtn}>
      Add
    </button>
  );

  const cntrlbtn = (
    <div className="cntrlbtn">
      <button className="subBtn" onClick={props.handleDecrementBtn}>
        -
      </button><span className="spanCount">{props.value}</span>
      <button className="addbtn" onClick={props.handleIncrementBtn}>
        +
      </button>
    </div>
  );
  return <div>{!props.value ? addbtn : cntrlbtn }</div>;
};

export default MainListBtn;






// const [count, setCount] = useState(0);

// const handleIncrmntBtn = () => {
//   if (count >= 0) {
//     return setCount(count + 1);
//   }
// };

// const handleDcrmntBtn = () => {
//   if (count >= 1) {
//     return setCount(count - 1);
//   }
// };