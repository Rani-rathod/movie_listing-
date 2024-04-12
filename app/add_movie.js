import React from 'react';
const Add_movie=()=>{
    const [status,setStatus]=React.useState(true)
    return (
        <div className="add-movie"> 
            <h3>Add A New Movie</h3>
            <p>To add a movie you have to fill a form. The added movie will appear in the list above</p>
            <div className="add_button">
                <h1>Add Movie</h1>
                <button oneClick={()=>setStatus(false)}>Hide</button>
            </div>
            
            <div className="form-ui">
   
            </div>
            
            
        </div>
        
    )
}
export default Add_movie;


