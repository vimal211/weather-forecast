//Complete the Weather API Backend part using openweathermap api
const apikey = '0c826b29d8bcb078c01e22bc83305b4c';
let curr = new Date;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


document.getElementsByClassName('search-box')[0].addEventListener('keyup',function(){
    let city = document.getElementsByClassName('city')[0];
    let date = document.getElementsByClassName('date')[0];
    let temp = document.getElementsByClassName('temp')[0];
    let weather = document.getElementsByClassName('weather')[0];
    let hi_low = document.getElementsByClassName('hi-low')[0];

    if(event.keyCode===13){
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementsByClassName("search-box")[0].value}&units=metric&appid=${apikey}`
        fetch(url).then(response=>response.json()).then(data=>{
            city.innerHTML=`${data.name}, ${data.sys.country}`;
            temp.innerHTML=`${(data.main.temp).toFixed(0)}°c`;
            weather.innerHTML=data.weather[0].main;
            date.innerHTML= `${days[curr.getDay()]} ${curr.getDate()} ${months[curr.getMonth()]} ${curr.getFullYear()}`
            hi_low.innerHTML=`${(data.main.temp_min).toFixed(0)}°c / ${(data.main.temp_max).toFixed(0)}°c`;
        });
    }
})