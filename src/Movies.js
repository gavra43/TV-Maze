import React, { useState, useEffect } from "react";
import "./movies.css";
import HomePage from "./Pages/HomePage";
import SinglePage from "./Pages/SinglePage";

const Movies = () => {
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");

  // constructor(props){
  //   super(props)
  //   this.fetchData = this.fetchData.bind(this)
  //   this.setSelectMovie = this.setSelectMovie.bind(this)
  //   this.backToHome = this.backToHome.bind(this)
  //   this.state = {
  //     selectedMovie : '',
  //     data : []
  //     }
  // }

  useEffect(() => {
    fetchData();
  }, []);

  // componentDidMount(){
  //   this.fetchData()
  // }

  const backToHome = () => {
    setSelectedMovie("");
    // this.setState({
    //   selectedMovie: ''
    // })
  };

  const fetchData = () => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((response) =>
        setData(
          response
            .sort((a, b) => b.rating.average - a.rating.average)
            .filter((e, i) => i < 50)
        )
      );
  };

  const changeSelectMovie = (movie) => {
    setSelectedMovie(movie);
    // this.setState({
    //   umesto da setujemo stejt na true, setovati stejt na kliknuti objekat ili na id kliknutog objekta
    //   selectedMovie : true
    // })
  };

  return (
    <div>
      {/* <button onClick={this.setSelectMovie}>Go to Single Page</button> */}
      {!selectedMovie ? (
        <HomePage movies={data} funkcija={changeSelectMovie} />
      ) : (
        <SinglePage backToHome={backToHome} qwe={selectedMovie} />
      )}
    </div>
  );
};

export default Movies;
