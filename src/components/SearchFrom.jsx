import React, { useState }from 'react';
import { useHistory } from "react-router-dom";

const SearchForm = () =>{
    let [catagory, setCatagory] = useState("planets");
    let [id, setId] = useState();
    const history = useHistory();

    const SendForminfo = (e) => {
        e.preventDefault();
        console.log(catagory)
        console.log(id)
        history.push(`/${catagory}/${id}`);
    }

    return (
        <div>
        <form onSubmit={SendForminfo}>
            <label>Search for:</label>
            <select  onChange={(e)=>setCatagory(e.target.value)} >
                <option value="planets">Planets</option>
                <option value="people">People</option>
                <option value='species'>Species</option>
                <option value='starships'>Starships</option>
            </select>
            <label>ID: </label>
            <input type="text" onChange={(e)=>setId(e.target.value)}></input>
            <input type="submit"/>
        </form>
        </div>
    )
} 
export default SearchForm