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
    <div>
      
    <div className= {s.App} >

      <div className= {s.bkg} > 
        

      </div>


    </div>

    <div className={s.searchBar}>
          <SearchBar search = {search}/>
          <div className= {s.citiesContainer}>
            <Cards cities ={cities} close ={close} />
            <h1 style={{fontSize: '55px', color:'wheat', width:'100%'}}>Aca va la data del pronóstico</h1>
          </div>

          <div > <h2 style={{fontSize: '15px', color:'wheat', backgroundColor: 'red', marginRight:'0px' }} >Aca va la city</h2></div>
        </div>
    </div>
  );
}

export default App;
