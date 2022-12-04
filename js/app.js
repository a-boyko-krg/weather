fetch('https://api.openweathermap.org/data/2.5/weather?q=Kryvyi%20Rih&units=metric&APPID=5d066958a60d315387d9492393935c19&lang=ru')
      .then(response => response.json())
      .then((data) => {
            let city = document.querySelector(".city");
            city.textContent = data.name;
            let temp = document.querySelector(".temp");;
            temp.textContent = `${Math.round(data.main.temp)}°С`;
            let pressure = document.querySelector(".pressure");
            pressure.textContent = `Давление:  ${data.main.pressure} мм`;
            let description = document.querySelector(".description");
            description.textContent = data.weather[0].description;
            let humidity = document.querySelector(".humidity");
            humidity.textContent = `Влажность:  ${data.main.humidity}%`;
            let speed = document.querySelector(".speed");
            speed.textContent = `Ветер:  ${data.wind.speed} км/ч`;
            let deg = document.querySelector(".deg");
            deg.textContent = `Направление ветра:  ${data.wind.deg}°`;
            let icon = document.querySelector(".icon");
            icon.setAttribute(`src`, `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
      });



