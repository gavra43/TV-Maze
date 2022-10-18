import React, { useState } from "react";

const Header =(props)=>{
    const[searchValue, setSearchValue]=useState('')
    const[results, setResults]=useState([])
    const setSearch = (str)=>{
        setSearchValue(str)
    }

    const fetchSearchResults = ()=>{
        fetch(`base/search/movies?q=${searchValue}`)
        .then(res=>res.json())
        .then(res=> setResults(res))
    }


        return <div id="header">
            <img src="https://cdn-icons-png.flaticon.com/512/738/738096.png" alt="logo" />
            <h2>TV Maze</h2>
            <input type="text" onChange={(event)=>{setSearch(event.target.value)}} />
            <button onClick={fetchSearchResults}>Search</button>
        </div>
    }


export default Header
