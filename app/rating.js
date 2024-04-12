import React, { useState } from 'react';
function Rating(props) {
    const [count, setCount] = useState(0);
    const handleLike = () => {
        setCount(count + 1);
    };
    
    const handleDislike = () => {
        setCount(count - 1);
    };
    
    return (
        <div className="rating">
            <img src="like.png" className="like1" onClick={()=>props.like_count(props.data)} />
            <div className="count">{props.data.vote}</div>
            <img src="dislike.png" className="dislike1" onClick={()=>props.dislike_count(props.data)} />
        </div>
  );
}
export default Rating;



