import React, { useState } from 'react'
import getWeatherIcon from "./GeneralIncludes";

export default function HourlyForecast({hourlyForecast, sunset, sunrise}) {
    const upcommingHours = Array.from(hourlyForecast);
    const [visible, setVisible] = useState(12);

    let sunsetHour;
    let sunriseHour;
    function getTime(s) {
        // const dtFormat = new Intl.DateTimeFormat('sv-SE', {
        //   timeStyle: 'medium',
        //   timeZone: 'UTC'
        // });

        let newSunset = new Date(sunset * 1000)
        let newSunrise = new Date(sunrise * 1000)
        sunsetHour = newSunset.getHours();
        sunriseHour = newSunrise.getHours();        
    }
    getTime(sunset);
    getTime(sunrise);

    
    // Funktion för att ta reda på hur många dagars skillnad det är från idag till imorgon och i övermorgon
    const ms_per_day = 1000 * 60 * 60 * 24;
    function dateDiffInDays(a, b) {
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        let dayDiffName = Math.round((utc2 - utc1) / ms_per_day);
        if(dayDiffName === 0){
            dayDiffName = "Idag"
        }else if(dayDiffName === 1){
            dayDiffName = "Imorgon"
        }else{
            dayDiffName = "Om " + dayDiffName + " dagar";
        }
        return dayDiffName;
    }

    let todayDate = new Date();
    let newHours;
    let newDate;
    let allHoursArray = []
    
    // Loop för att få fram år, månad, dag och timmar
    for(let i = 0; i < upcommingHours.length; i++) {
        todayDate.setHours(todayDate.getHours() + 1)
        newDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), todayDate.getHours(), 0, 0);
        allHoursArray.push(newDate)
    }

    let precipitation;
    let weather_details = upcommingHours.map(function(oneHour, i){
        let upcomingTemperature = oneHour?.temp;
        let weatherDescription = oneHour?.weather?.[0]?.description;
        let feels_like = oneHour?.feels_like
        let dayAndHour = allHoursArray[i];

        if(oneHour.snow?.["1h"]){
            precipitation = oneHour.snow?.["1h"].toFixed(1);
        }else if(oneHour?.rain?.["1h"]){
            precipitation = oneHour?.rain?.["1h"].toFixed(1);
        }else{
            precipitation = 0;
        }

        let hourly_weather_details = {temp: upcomingTemperature, description: weatherDescription, dayAndHour: dayAndHour, feels_like: feels_like, precipitation: precipitation};

        return hourly_weather_details;
    })

    // Funktion för att visa fler timmar med det kommande vädret
    function showMore() {
        setVisible((prevValue) => prevValue + 12)
    }

    let icon; 
    let currentDay;
    let details = weather_details.slice(0, visible).map((hours) => {
        let newCheckhours = hours.dayAndHour.getHours()
        
        // Funktion för att kolla vad responsen ger för väder beskrivning och returnera rätt ikon
        icon = getWeatherIcon(newCheckhours, sunriseHour, sunsetHour, hours.description)

        let nameOfCurrentDay;
        if(currentDay !== dateDiffInDays(new Date(), hours.dayAndHour)){
            currentDay = dateDiffInDays(new Date(), hours.dayAndHour);
            nameOfCurrentDay = <tr>
                <td className="dayName" colSpan="5">{dateDiffInDays(new Date(), hours.dayAndHour)}</td>
            </tr>
        }else {
            nameOfCurrentDay = "";
        }

        return <> 
            {nameOfCurrentDay}
            <tr key={hours.dayAndHour}>
                <td>{("0" + hours.dayAndHour.getHours()).slice(-2)}:00</td>
                <td title={hours.description}> {icon} </td>
                <td> {Math.round(hours.temp)} °C</td>
                <td> {Math.round(hours.feels_like)} °C</td>
                <td> {hours.precipitation}</td>
            </tr>
        </>
    })

    return (
        <>
            <div className="hourlyForecast-div"> 
                <table>
                    <thead key={"Head"}>
                        <tr className="table-Head">
                            <th>Tid</th>
                            <th>Väder</th>
                            <th>Temp</th>
                            <th>Känns som</th>
                            <th>mm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details}
                    </tbody>
                </table>
            </div>
            {visible < 49 ?
                <div className="show-more-btn-div">
                    <button className="show-more-btn" onClick={showMore}><i className="fas fa-chevron-down fa-lg"></i></button>
                    
                </div> 
            : false}
        </>
    )
}
