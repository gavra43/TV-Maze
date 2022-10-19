import React from "react"
import Card from "../Components/Card"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const HomePage = (props)=>{
    // constructor(props) {
    //     super(props);
    //     // console.log(this.props.funkcija);
    // }
    // render() { 
        return <div>
            <Header xyzFunkcija={props.xyzFunkcija}>

            </Header>
            <div className="movies-wrapper">
            {props.movies.map((element,i,arr)=>{ return <Card funkcija2={props.funkcija} singleMovie={element} abcF={props.Funkcija}/> })}
            </div>
            <Footer></Footer>
        </div>
    }
// }
 
export default HomePage;