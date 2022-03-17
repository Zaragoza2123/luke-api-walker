import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect} from 'react';

const StarWarAPISearch = () => {

    let [searchedInfo, setSearchedInfo] = useState([]);
    const {catagory, id}  = useParams();
    let [it, setIt] = useState(true)

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${catagory}/${id}`)
        .then((data)=>{
            console.log('item searched');
            console.log(data);
            setSearchedInfo(data.data)
            setIt(true);
        })
        .catch((error) =>{
            console.log('error when fetching, something went wrong -->', error)
            setIt(false);
        })
    },[catagory,id]);

    return (
            <div>
                {
                    it == false?
                    <div>
                    <p>These aren't the droids you're looking for</p>
                    <img src="https://www.tvinsider.com/wp-content/uploads/2021/12/BOBA_FETT_STAR_WARS_5-1014x570.jpg" alt="Obi-Wan Kenobi"></img>
                    </div>:
                    catagory == "planets"?
                    <div>
                        <h1>{searchedInfo.name}</h1>
                        <p>Climate-{searchedInfo.climate}</p>
                        <p>Terrain-{searchedInfo.terrain}</p>
                        <p>Gravity-{searchedInfo.gravity}</p>
                        <p>Population-{searchedInfo.population}</p>
                    </div>:
                    catagory == "people"?
                    <div>
                        <h1>{searchedInfo.name}</h1>
                        <p>Height-{searchedInfo.height}</p>
                        <p>Mass-{searchedInfo.mass}</p>
                        <p>Hair Color-{searchedInfo.hair_color}</p>
                        <p>Birth Year-{searchedInfo.birth_year}</p>
                        <p>Home World-{searchedInfo.homeworld}</p>
                    </div>:
                    catagory == "species"?
                    <div>
                        <h1>{searchedInfo.name}</h1>
                        <p>Classification-{searchedInfo.classification}</p>
                        <p>Language-{searchedInfo.language}</p>
                        <p>Average Height-{searchedInfo.average_height}</p>
                        <p>Average Lifespan-{searchedInfo.average_lifespan}</p>
                    </div>:
                    catagory == "starships"?
                    <div>
                        <h1>{searchedInfo.name}</h1>
                        <p>Model-{searchedInfo.model}</p>
                        <p>Manufacturer-{searchedInfo.manufacturer}</p>
                        <p>Max Atmosphering Speed-{searchedInfo.max_atmosphering_speed}</p>
                        <p>Cost-{searchedInfo.cost_in_credits}</p>
                        <p>Cargo Capacity-{searchedInfo.cargo_capacity}</p>
                    </div>:
                   
                    <p>POP</p>
                }
            </div>
    
    )}
export default StarWarAPISearch;
