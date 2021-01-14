import React, { useEffect, useRef, useState } from 'react'

export default function SearchCity({getSearchedWeatherResult, getSearchedWeather}) {
    const [search, setSearch] = useState("");
    const placeInputRef = useRef(null);
    const [btnSearch, setBtnSearch] = useState(true)

    function sendSearch(e){
        e.preventDefault();
        getSearchedWeather();
        setSearch(e.target.value)
        document.getElementById("input").value = "";
        setBtnSearch(true)
    }

    useEffect(() => {
        initPlaceAPI();
    }, []);
     
    const initPlaceAPI = () => {
        let autocomplete = new window.google.maps.places.Autocomplete(placeInputRef.current)
            new window.google.maps.event.addListener(autocomplete, "place_changed", function(){
            let place = autocomplete.getPlace();
            setSearch(place.formatted_address);
            console.log("place")
            console.log(place)
            setBtnSearch(false)
        });
    };

    return (
        <>
            <form onSubmit={sendSearch}>
                <input id="input" ref={placeInputRef} />
                <button className="enknapp" type="submit" disabled={btnSearch} onClick={getSearchedWeatherResult(search)}>Sök</button>
            </form>       
        </>
    )
}
