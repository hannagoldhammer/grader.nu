import React, { useEffect, useRef, useState } from 'react'

export default function SearchCity({getSearchedWeatherResult, getSearchedWeather}) {
    const [search, setSearch] = useState("");
    const [btnSearch, setBtnSearch] = useState(true)
    const [btnStyle, setBtnStyle] = useState(false)
    const placeInputRef = useRef(null);

    function sendSearch(e){
        // document.getElementsByClassName("dailyForecast-div").style.zIndex = "-100";
        e.preventDefault();
        getSearchedWeather();
        setSearch(e.target.value)
        document.getElementById("input").value = "";
        setBtnSearch(true)
        setBtnStyle(false)
    }

    useEffect(() => {
        initPlaceAPI();
    }, []);
     
    const initPlaceAPI = () => {
        let autocomplete = new window.google.maps.places.Autocomplete(placeInputRef.current)
            new window.google.maps.event.addListener(autocomplete, "place_changed", function(){
            let place = autocomplete.getPlace();
            setSearch(place.formatted_address);
            // console.log("place")
            // console.log(place)
            setBtnSearch(false)
            setBtnStyle(true)
        });
    };

    return (
        <div className="search-form-div">
            <form onSubmit={sendSearch}>
                <input id="input" ref={placeInputRef} />
                <button className={btnStyle ? "btnStyleTrue btnStyleFalse" : "btnStyleFalse"} type="submit" disabled={btnSearch} onClick={getSearchedWeatherResult(search)}>Sök</button>
            </form> 
            <div className="icon-img-div">
                <img onClick={() => window.location.reload(false)} className="icon-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDU4IDU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz4KPGNpcmNsZSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGN4PSIyOSIgY3k9IjI5IiByPSIyOSIgZmlsbD0iI2YwZjhmZiIgZGF0YS1vcmlnaW5hbD0iI2U3ZWNlZCIgY2xhc3M9IiI+PC9jaXJjbGU+Cjxwb2x5Z29uIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgcG9pbnRzPSIyNC42MjEsMzIuMTg5IDguMDQ5LDI5LjQxMiA0My44MTEsMTMgMjYuNTE5LDQ3Ljg4MiAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMxMDgxZTAiIGNsYXNzPSIiPjwvcG9seWdvbj4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
            </div>      
        </div>
    )
}
