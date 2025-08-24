fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=sunrise,sunset,uv_index_max&hourly=temperature_2m,rain,snowfall,showers&current=is_day,rain,snowfall,temperature_2m,wind_speed_10m&timezone=auto")
    .then((response) => response.json())
    .then((res) => {
        console.log(res); 
    });