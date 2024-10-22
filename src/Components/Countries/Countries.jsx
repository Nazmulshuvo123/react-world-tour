import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => setCountries(data))
    },[])

    const handleVisitedCountry =(country) =>{
        console.log("add this to your visited country")
        const newVisitedCountries =[...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags =(flag)=>{
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }
    
        <div>
            <h2>Countries: {countries.length}</h2>
            {/* Visited countries */}
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => 
                        <li key={country.cca3}>
                            {country.name.common}</li>)
                    }
                </ul>
            </div>
                    {/* Display flag */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img src={flag}></img>)
                }
                
            </div>
                    {/*Display countries  */}
           <div className="country-container">
               {
                  countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedCountry = {handleVisitedCountry}
                    handleVisitedFlags = {handleVisitedFlags}
                    country ={country}></Country>)
               }
           </div>
        </div>
    
};


export default Countries;