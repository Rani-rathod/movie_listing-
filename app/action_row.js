import React from 'react';
import Rating from './rating.js';
const Action_row = (props) => {
  return (
    <>
        <div className="delete">
            <button onClick={()=>{props.onDelete()}}><img src="delete.svg" /></button>
        </div>
      <Rating {...props}/>
    </>
  );
};
export default Action_row;
