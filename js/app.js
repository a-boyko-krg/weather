fetch('https://api.openweathermap.org/data/2.5/weather?q=Kryvyi%20Rih&units=metric&APPID=5d066958a60d315387d9492393935c19&lang=ru')
      .then(response => response.json())
      .then((data) => {
            let city = document.querySelector(".city");
            city.textContent = data.name;
            let temp = document.querySelector(".temp");;
            temp.textContent = `${Math.round(data.main.temp)}°С`;
            let pressure = document.querySelector(".pressure");
            pressure.textContent = `${data.main.pressure} мм`;
            let description = (document.querySelector(".description"));
            description.textContent = data.weather[0].description;
            let humidity = document.querySelector(".humidity");
            humidity.textContent = `${data.main.humidity}%`;
            let speed = document.querySelector(".speed");
            speed.textContent = `${data.wind.speed} км/ч, ${directionOfWind(data.wind.deg)}`;
            let clouds = document.querySelector(".clouds");
            clouds.textContent = `${data.clouds.all}%`;
            let icon = document.querySelector(".icon");
            icon.setAttribute(`src`, `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
      });

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


