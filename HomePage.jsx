import React from "react"
import Card from "../Components/Card"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.funkcija);
    }
    render() { 
        return <div>
            <Header xyzFunkcija={this.props.xyzFunkcija}>

            </Header>
            <div className="movies-wrapper">
            {this.props.movies.map((element,i,arr)=>{ return <Card funkcija2={this.props.funkcija} abc={element} abcF={this.props.xyzFunkcija}/> })}
            </div>
            <Footer></Footer>
        </div>
    }
}
 
export default HomePage;