
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const secondEl = document.getElementById('second');
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const monts = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

setInterval(() => {
   const time = new Date();
   const month = time.getMonth();
   const date = time.getDate();
   const day = time.getDay();
   const hour = time.getHours();
   let second;
   let minutes;

   function showMinutes() {
      if (time.getMinutes() <= 9) {
         minutes = `0${time.getMinutes()}`
      } else {
         minutes = time.getMinutes();
      }
   }
   
   function showSeconds() {
      if (time.getSeconds() <= 9) {
         second = `0${time.getSeconds()}`
      } else {
         second = time.getSeconds();
      }
   }

   showMinutes()
   showSeconds()

   timeEl.innerHTML = `${hour} : ${minutes}`;
   secondEl.innerHTML = `${second}`
   dateEl.innerHTML = `${days[day - 1]}, ${date} ${monts[month]}`;
   
}, 1000);


const link =
   'https://api.openweathermap.org/data/2.5/weather?q=Кривой%20Рог&units=metric&APPID=5d066958a60d315387d9492393935c19&lang=ru';

const fetchData = async () => {

   const response = await fetch(`${link}`);
   const data = await response.json();
   document.querySelector(".city").textContent = data.name;
   document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°С`;
   document.querySelector(".pressure").textContent = `${data.main.pressure} мм`;
   document.querySelector(".description").textContent = capitalizeFirstLetter(data.weather[0].description);
   document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
   document.querySelector(".speed").textContent = `${data.wind.speed} м/сек, ${directionOfWind(data.wind.deg)}`;
   document.querySelector(".clouds").textContent = `${data.clouds.all}%`;
   document.querySelector(".icon").setAttribute(`src`, `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
};

fetchData();

const directionOfWind = (degree) => {
   if (degree > 337.5) { return 'северный' };
   if (degree > 292.5) { return 'северо-западный' };
   if (degree > 247.5) { return 'западный' };
   if (degree > 202.5) { return 'юго-западный' };
   if (degree > 157.5) { return 'южный' };
   if (degree > 122.5) { return 'юго-восточный' };
   if (degree > 67.5) { return 'восточный' };
   if (degree > 22.5) { return 'северо-восточный' }
   return 'северный';
}

const capitalizeFirstLetter = (string) => {
   return string.charAt(0).toUpperCase() + string.slice(1);
}