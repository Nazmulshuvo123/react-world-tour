import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    // console.log(country);
    const {name, flags, population, cca3, area} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }

    console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited ? 'visited-css' : 'non-visited'}`}>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <h5>Code: {cca3}</h5>

            <hr />
            <button>Mark Visited</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ?  'I have visited the country.' : 'I want to visited'}
        </div>
    );
};

export default Country;