// function onGeoOk(position){
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     const myAPI = "602283133fd509481e3ae5662cc63bbf";
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${myAPI}&units=metric`
//     // console.log(url);
//     fetch(url).then(response => response.json())
//     .then((data)=>{
//         const weather = document.querySelector(".weather span:first-child")
//         const city = document.querySelector(".weather span:last-child")
//         weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
//         city.innerText =data.name;
//     });
// };

// function onGeoError(){
//     alert("Can't find you. No weather for you.")
// }
// navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);