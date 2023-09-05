const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "0e31a4e106msha1cc07a7266539bp172f21jsnb0e81847a40f",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
};

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch(url + city, options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);

			// cloud_pct.innerHTML = response.cloud_pct;
			temp.innerHTML = response.temp;
			temp2.innerHTML = response.temp;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			humidity2.innerHTML = response.humidity;
			min_temp.innerHTML = response.min_temp;
			max_temp.innerHTML = response.max_temp;
			wind_speed.innerHTML = response.wind_speed;
			wind_speed2.innerHTML = response.wind_speed;
			wind_degrees.innerHTML = response.wind_degrees;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;
		})
		.catch((error) => console.error(error));
};

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
});

getWeather("Delhi");


// bangalore weather
const bangloreWeather = () => {
	fetch(url + "Bangalore", options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);

			bangalore_cloud_pct.innerHTML = response.cloud_pct;
			bangalore_temp.innerHTML = response.temp;
			bangalore_feels_like.innerHTML = response.feels_like;
			bangalore_humidity.innerHTML = response.humidity;
			bangalore_min_temp.innerHTML = response.min_temp;
			bangalore_max_temp.innerHTML = response.max_temp;
			bangalore_wind_speed.innerHTML = response.wind_speed;
			bangalore_wind_degrees.innerHTML = response.wind_degrees;
			bangalore_sunrise.innerHTML = response.sunrise;
			bangalore_sunset.innerHTML = response.sunset;
		})
		.catch((error) => console.error(error));
};
bangloreWeather();

// hyderabad weather
const hyderabadWeather = () => {
	fetch(url + "Hyderabad", options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);

			hyderabad_cloud_pct.innerHTML = response.cloud_pct;
			hyderabad_temp.innerHTML = response.temp;
			hyderabad_feels_like.innerHTML = response.feels_like;
			hyderabad_humidity.innerHTML = response.humidity;
			hyderabad_min_temp.innerHTML = response.min_temp;
			hyderabad_max_temp.innerHTML = response.max_temp;
			hyderabad_wind_speed.innerHTML = response.wind_speed;
			hyderabad_wind_degrees.innerHTML = response.wind_degrees;
			hyderabad_sunrise.innerHTML = response.sunrise;
			hyderabad_sunset.innerHTML = response.sunset;
		})
		.catch((error) => console.error(error));
};
hyderabadWeather();

// mumbai weather
const mumbaiWeather = () => {
	fetch(url + "Mumbai", options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);

			mumbai_cloud_pct.innerHTML = response.cloud_pct;
			mumbai_temp.innerHTML = response.temp;
			mumbai_feels_like.innerHTML = response.feels_like;
			mumbai_humidity.innerHTML = response.humidity;
			mumbai_min_temp.innerHTML = response.min_temp;
			mumbai_max_temp.innerHTML = response.max_temp;
			mumbai_wind_speed.innerHTML = response.wind_speed;
			mumbai_wind_degrees.innerHTML = response.wind_degrees;
			mumbai_sunrise.innerHTML = response.sunrise;
			mumbai_sunset.innerHTML = response.sunset;
		})
		.catch((error) => console.error(error));
};
mumbaiWeather();

// kolkata weather
const kolkataWeather = () => {
	fetch(url + "Kolkata", options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);

			kolkata_cloud_pct.innerHTML = response.cloud_pct;
			kolkata_temp.innerHTML = response.temp;
			kolkata_feels_like.innerHTML = response.feels_like;
			kolkata_humidity.innerHTML = response.humidity;
			kolkata_min_temp.innerHTML = response.min_temp;
			kolkata_max_temp.innerHTML = response.max_temp;
			kolkata_wind_speed.innerHTML = response.wind_speed;
			kolkata_wind_degrees.innerHTML = response.wind_degrees;
			kolkata_sunrise.innerHTML = response.sunrise;
			kolkata_sunset.innerHTML = response.sunset;
		})
		.catch((error) => console.error(error));
};
kolkataWeather();

// chennai weather
const chennaiWeather = () => {
	fetch(url + "Chennai", options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);

			chennai_cloud_pct.innerHTML = response.cloud_pct;
			chennai_temp.innerHTML = response.temp;
			chennai_feels_like.innerHTML = response.feels_like;
			chennai_humidity.innerHTML = response.humidity;
			chennai_min_temp.innerHTML = response.min_temp;
			chennai_max_temp.innerHTML = response.max_temp;
			chennai_wind_speed.innerHTML = response.wind_speed;
			chennai_wind_degrees.innerHTML = response.wind_degrees;
			chennai_sunrise.innerHTML = response.sunrise;
			chennai_sunset.innerHTML = response.sunset;
		})
		.catch((error) => console.error(error));
};
chennaiWeather();