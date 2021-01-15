import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherPage from "../components/WeatherPage"
import SearchCity from "../components/SearchCity";
import Header from "../components/Header";
import Geocode from "react-geocode";
import HourlyForecast from "../components/HourlyForecast";
import DailyForecast from "../components/DailyForecast";
import Loading from "../components/Loading";

export default function Page() {
    const [currentWeather, setCurrentWeather] = useState({});
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [reversedGeolocation, setReversedGeolocation] = useState("")
    const [searchedCity, setSearchedCity] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const [error404, setError404] = useState(false)
    const [error503, setError503] = useState(false)
    const [hourlyForecast, setHourlyForecast] = useState({})
    const [dailyForecast, setDailyForecast] = useState({})
    const [lng_lat, setLng_lat] = useState({longitude, latitude})
    const [leftButton, setLeftButton] = useState(false)
    const [sunrise, setSunrise] = useState(0)
    const [sunset, setSunset] = useState(0)

  // Hämta GeoLocation
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setError("Google Location kan inte hitta din plats. Prova att godkänna platsåtkomst på din enhet.");
    }
  }

  function showPosition(postition){
    setLongitude(postition.coords.longitude);
    setLatitude(postition.coords.latitude);
    setLng_lat(postition.coords.longitude, postition.coords.latitude)
  }

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        setError("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        setError("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        setError("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        setError("An unknown error occurred.")
        break;
    }
  }

  Geocode.setApiKey(`${process.env.REACT_APP_API_KEY}`);
  Geocode.setLanguage("sv");
  
  // Gör om enhetens nuvarande coordinater till en stad
  function getReversedGeolocation(){
    if(longitude && latitude){
      Geocode.fromLatLng(latitude, longitude).then(
        response => {
          let city = "";
          
          // Leta först uppstadens namn med postal_town
          response.results.forEach((result) => {
            if(result.types === "postal_town"){
                city = result.formatted_address;
              }
            })

            // Finns inte postal_town, leta efter locality
            if(city === ""){
              response.results.forEach((result) => {
                if(result.types[0] === "locality"){
                  city = result.formatted_address;
                }
              })
            }

            // Finns inte locality, leta efter country
            if(city === ""){
              response.results.forEach((result) => {
                if(result.types[0] === "country"){
                  city = result.formatted_address;
                }
              })
            }
          return setReversedGeolocation(city)
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  // Hämta data från API på current position
  const getCurrentWeather = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/onecall`,
    // url: `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/onecall`,
    params: {
      lat: latitude,
      lon: longitude,
      exclude: 'minutely,alerts',
      lang: 'se',
      units: "metric",
      mode: '',
      appid: process.env.REACT_APP_WEATHER_KEY
    }
  }; 
  
  // Hämta data från API på sökt plats
  const getSearchedWeatherAPI = {
    method: 'GET',
    url: `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather`,
    params: {
      q: searchedCity,
      lang: 'se',
      units: "metric",
      mode: '',
      appid: process.env.REACT_APP_WEATHER_KEY
    }
  };

  // För att söka på stad
  function getSearchedWeather(){
    axios.request(getCurrentWeather).then(function (res) {
      setLatitude(undefined)
      setLongitude(undefined)
      setLng_lat(undefined, undefined)
      setCurrentWeather(res.data)

      // Reverse sökning till longitude och latitude
      Geocode.fromAddress(searchedCity).then(
        response => {
          setLatitude(response?.results?.[0]?.geometry?.location?.lat);
          setLongitude(response?.results?.[0]?.geometry?.location?.lng);
          setLng_lat(response?.results?.[0]?.geometry?.location?.lng, response?.results?.[0]?.geometry?.location?.lat)
          console.log("response")
          console.log(response)
        },
        error => {
          console.error(error);
        }
      );
    }).catch(error => {
      console.log(error.message)
      if (error.response) {

            // if(error.response.status === 404){
            // setError404(true);
            // }
         
            if(error.request.status === 503){
                setError503(true);
            }
            // The request was made and the server responded with a status code that falls out of the range of 2xx
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.response.status);
    });
    setError503(false)
  }
  
  useEffect(() => {
    getLocation(); 
  }, [])
  
  useEffect(() => {
    getReversedGeolocation();
    
    if(longitude && latitude){
      setLoading(true)
      axios.request(getCurrentWeather).then(function (res) {
        let response = res?.data?.current;
        let forecastHours = res?.data?.hourly;
        let forecastDaily = res?.data?.daily;
        let sunUp = res?.data?.current.sunrise;
        let sunDown = res?.data?.current.sunset;
        setCurrentWeather(response)
        console.log(res.data)
        setHourlyForecast(forecastHours)
        setDailyForecast(forecastDaily)
        setSunrise(sunUp)
        setSunset(sunDown)
        setLoading(false)
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, [lng_lat])

    function right() {
      console.log("Vänster")
      console.log(document.getElementById('scroll-div').scrollLeft)
      document.getElementById('scroll-div').scrollLeft += 250;
      setLeftButton(true)
    };
    function left() {
      console.log("Höger")
        document.getElementById('scroll-div').scrollLeft -= 250;
    };

    return (
      <div className="main-div">
        {loading ? 
          <Loading />
        :
        <>
          <div className="weatherpage-div">
              <Header/>
              <SearchCity getSearchedWeather={getSearchedWeather} getSearchedWeatherResult={search => {setSearchedCity(search)}} />
              <WeatherPage loading={loading} data={currentWeather} reversedGeolocation={reversedGeolocation} error404={error404} error503={error503} sunrise={sunrise} sunset={sunset}/>
          </div>
          <div className="dailyForecast-div">
            {leftButton ? 
              <div onClick={left} className="arrow-div left">
                <i class="fas fa-chevron-left fa-lg"></i>
              </div>
            : null}
            <div id="scroll-div" className="dailyForecast-wrapping-div">
              <DailyForecast dailyForecast={dailyForecast}/>
            </div>
            <div onClick={right} className="arrow-div right">
              <i class="fas fa-chevron-right fa-lg"></i>
            </div>
          </div>

          <div className="hourlyForecast-wrapping-div">
              <HourlyForecast hourlyForecast={hourlyForecast} sunrise={sunrise} sunset={sunset}/>
          </div>
        </>
      }
        

      </div>
    )
}
