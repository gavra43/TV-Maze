import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const SinglePage = (props) => {
  const [seasons, setSeasons] = useState([]);
  const [cast, setCast] = useState([]);
  // constructor (props) {
  //     super(props);
  //     this.fetchDetails = this.fetchDetails.bind(this)
  //     this.fetchCast = this.fetchCast.bind(this)
  //     this.state={
  //         seasons : [],
  //         cast : []
  //     }
  //     console.log(this.state.seasons);

  const fetchDetails = () => {
    fetch(`https://api.tvmaze.com/shows/${props.qwe.id}/seasons`)
      .then((res) => res.json())
      .then((response) => setSeasons(response));
  };
  const fetchCast = () => {
    fetch(`https://api.tvmaze.com/shows/${props.qwe.id}/cast`)
      .then((res) => res.json())
      .then((response) => setCast(response));
  };
  useEffect(() => {
    fetchDetails();
    fetchCast();
  }, []);
  // componentDidMount (){
  //     this.fetchDetails()
  //     this.fetchCast()
  // }

  // render() {
  return (
    <div className="singleFuckingPage">
      <Header></Header>
      <div className="singleMovieWrapper">
        <div>
          <h2>{props.qwe.name}</h2>
          <img
            className="poster"
            src={props.qwe.image.medium}
            alt={`Image of ${props.qwe.name}`}
          />
        </div>
        <div>
          <h3>Seasons</h3>
          <ul>
            {seasons.map((e) => {
              return <li>{`${e.premiereDate} - ${e.endDate}`}</li>;
            })}
          </ul>
          <h3>Cast</h3>
          <ul>
            {cast.map((e) => {
              return <li>{e.character.name}</li>;
            })}
          </ul>
        </div>
      </div>

      <button onClick={props.backToHome}>Back to Home</button>
      <Footer></Footer>
    </div>
  );
  // }
};

export default SinglePage;
