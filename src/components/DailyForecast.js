import React from 'react'

export default function DailyForecast({dailyForecast}) {
    // console.log(dailyForecast)
    const upcomingDays = Array.from(dailyForecast)

    let todayDate = new Date();
    let newDays;
    let allDaysArray = []

    for(let i = 0; i < upcomingDays.length; i++) {
        todayDate.setDate(todayDate.getDate() + 1)
        newDays = todayDate.toLocaleString('sv-SE',{weekday: 'long', month:'long', day:'numeric'})
        allDaysArray.push(newDays)
    }


    let weather_details = upcomingDays.map((oneDay, i) => {
        let upcomingTemperature = oneDay?.temp?.day;
        let weatherDescription = oneDay?.weather?.[0]?.description;
        let feels_like = oneDay?.feels_like?.day
        let day = allDaysArray[i];

        function capitalize(){
            weatherDescription = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
            day = day.charAt(0).toUpperCase() + day.slice(1);
            return weatherDescription, day
        }
        capitalize();
        let daily_weather_details = {temp: upcomingTemperature, description: weatherDescription, weekday: day, feels_like: feels_like};

        return daily_weather_details;
    })


    let details = weather_details.map((days) => {
        return <div className="daily-weather-div">
            <div> {days.weekday} </div>
            <div><p className="daily-description"> {days.description} </p></div>
            <div>Temperatur: {Math.round(days.temp)} °C</div>
            <div> <p>Känns som:</p> {Math.round(days.feels_like)} °C</div>
        </div>
    })

    return (
        <>
            {details}
        </>
    )
}
