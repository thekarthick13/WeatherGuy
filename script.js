// Function to fetch weather data from OpenWeatherMap API
async function getWeatherData(location) {
    const apiKey = '1920d14f66500296278a613d03b5a364'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`

  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Location not found.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching weather data.');
    }
  }
  
  // Function to display current weather information
  function displayCurrentWeather(weatherData) {
    const currentWeatherContainer = document.getElementById('current-weather');
    currentWeatherContainer.innerHTML = `
      <h3>Current Weather in ${weatherData.name}</h3>
      <p>Temperature: ${weatherData.main.temp}°C</p>
      <p>Description: ${weatherData.weather[0].description}</p>
    `;
  }
  
  // Function to handle the search button click
  async function searchWeather() {
    const locationInput = document.getElementById('location-input');
    const location = locationInput.value.trim();
  
    if (!location) {
      alert('Please enter a location.');
      return;
    }
  
    try {
      const weatherData = await getWeatherData(location);
      displayCurrentWeather(weatherData);
    } catch (error) {
      alert(error.message);
    }
  }
  
  // Event listener for the search button
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', searchWeather);

function changeColor(){
  const body = document.body;
  const element=document.getElementById('weather-container');
  
   
     
     body.classList.toggle('dark');
     element.classList.toggle('darkk');


  }

     



  const logochange = document.getElementById('logo');

  logochange.addEventListener('click', function() {
    if (logochange.getAttribute('src') === 'logo.png') {
      logochange.src = 'darklogo.png';
    } else {
      logochange.src = 'logo.png';
    }
  });
  