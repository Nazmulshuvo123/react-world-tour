import './Country.css'
const Country = ({country}) => {
    // console.log(country);
    const {name, flags, population, languages, area} = country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
        </div>
    );
};

export default Country;