import Action_row from './action_row.js';
function Movie_row(props){
    return(
        <div className="detail">
            <div className="movie_img"><img src={props.data.movie_image}/></div>
                <div className="row_detail">
                    <h2>{props.data.movie}</h2>
                    <p>{props.data.year}</p>
                    <p>{props.data.Time}</p>
                    <h3>Description</h3>
                    <p>{props.data.description}</p>
                    <div className="action-row">
                        <Action_row {...props}  />
                </div>
                            
            </div>
        </div> 
    )
}
export default Movie_row;

