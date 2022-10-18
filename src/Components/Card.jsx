import React from "react";


const  Card =(props)=>{
//     constructor(props){
//     super(props)
//     console.log(this.props.funkcija2);
// }
    
        return <div class="card" onClick={() =>{props.funkcija2(props.singleMovie)}}> 
            <img src={props.singleMovie.image.medium} alt="movie-image" />
            <h3>{props.singleMovie.name}</h3>
        </div>
    }


export default Card
