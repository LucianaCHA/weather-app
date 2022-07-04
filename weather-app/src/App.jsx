import React from 'react';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import './index.css';
import s from './App.module.css'

function App() {
  const [cities, setCities] = React.useState([]);
  const api = '4ae2636d8dfbdc3044bede63951a019b';

  function search(city){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
      .then((response) => response.json())
      .then((res) => {
        if (res.main !== undefined ){
          const city = {
            id : res.id,
            name : res.name,
            min : Math.round(res.main.temp_min),
            max : Math.round(res.main.temp_max),
            img : res.weather[0].icon,
          }
          setCities((prevCities) => [...prevCities, city] )
        } else{
          prompt('City not found');
        }

      })
        
  }

  function close (id) {
    setCities ((prevCities) => prevCities.filter((closing) => closing.id !== id))
  }

  return (
    <div className= {s.App} >
      <div className= {s.bkg} > 
        <div className={s.searchBar}>
          <SearchBar search = {search}/>
          <div className= {s.citiesContainer}>
            <Cards cities ={cities} close ={close} />
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
