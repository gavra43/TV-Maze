import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.fetchSearch = this.fetchSearch.bind(this);
        this.state = { 
            data: []
         }
    }
    fetchSearch(value){
        fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
        .then(res => res.json())
        .then(response => this.setState({
            data : response
        }))
    }
    

    render() { 
        return <div id="header">
            <div>
            <img src="https://img.icons8.com/ios/50/000000/popcorn.png" title="popcorn icons" alt="logo"></img>
             <h2>TV Maze</h2>
            </div>
            <div className="padajuciMeni">
                <input onChange={(event)=>{this.fetchSearch(event.target.value)}}  type="text" placeholder="Search"/>
                {/* <button>Search</button> */}
                <ul className="lista">
                    {this.state.data.map((e,i,arr)=>{return <li onClick={()=>{
                        this.props.xyzFunkcija(e.show)
                        console.log(e)
                        }}>{e.show.name}</li>})}
                </ul>
            </div>
        </div>
    }
}
 
export default Header;
