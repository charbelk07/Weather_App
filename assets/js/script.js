var  cityName = document.querySelector("#cityName")

getWeather();
function getWeather(data){

    var url = "https://api.openweathermap.org/data/2.5/forecast?lat=33.75&lon=-84.3877&appid=b96369b7a0fc9a9998e5f61f45d491a3&units=imperial"
    console.log(url);
/*     var currentDate =dayjs().format("M/D/YYY");
 */    fetch (url)
        .then(function(response){
            response.json()
            .then(function(data){
            getWeather(data.city.name)
        })
    })
}

        
