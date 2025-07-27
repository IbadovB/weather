# Weather App – Baku Version

A simple weather app built with **HTML, CSS, and JavaScript** that uses the `fetch` API to display the **current weather in Baku** (fixed location).  
This app is designed as a beginner-friendly project to practice making API calls with JavaScript.

---

## Goal

- Fetch current weather data for **Baku** (using Open-Meteo API, no API key required).
- Display:
  - Temperature (°C)
  - Wind Speed (km/h)

---

## Checklist

### Project Setup
- [ ] Create a folder for the project (e.g., `weather-app`).
- [ ] Create `index.html`, `style.css`, and `script.js`.
- [ ] Link `style.css` and `script.js` in `index.html`.

### Fetch Weather Data (Baku)
- [ ] Use the **Open-Meteo API** with Baku’s coordinates:
  - Latitude: `40.4093`
  - Longitude: `49.8671`
- [ ] Use this API URL:
https://api.open-meteo.com/v1/forecast?latitude=40.4093&longitude=49.8671&current_weather=true

- [ ] Replace `API_URL_HERE` in `script.js` with the correct URL.
- [ ] Log the API response to the console to understand its structure.
- [ ] Extract `temperature` and `windspeed` from `data.current_weather`.
- [ ] Display the weather inside `#weatherResult` using `innerHTML`.

### Styling
- [ ] Add basic styling so the app looks clean and centered.
- [ ] Use the provided starter CSS.

### Bonus Features (Optional)
- [ ] Add a **“Refresh” button** to fetch the data again.
- [ ] Show a **loading message** while fetching.
- [ ] Display the **current time** along with the weather.
- [ ] Add **simple weather icons** (like ☀️ for sunny, 💨 for windy).

---

## Starter Code

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Weather App</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Baku Weather</h1>
<div id="weatherResult"></div>

<script src="script.js"></script>
</body>
</html>
```

### JAVASCRIPT

```
const resultDiv = document.getElementById('weatherResult');

// Fetch weather for Baku
fetch('API_URL_HERE')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Check the structure in the console
    // TODO: Display temperature and wind speed inside resultDiv
  })
  .catch(error => {
    console.error('Error fetching weather:', error);
  });
```

### CSS

```
body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

#weatherResult {
  margin-top: 20px;
  font-size: 18px;
}

```

#### How to Run

1. Open index.html in your browser.

2. Use the console (F12 → Console) to inspect the API response.

3. Implement the tasks step by step, using the checklist above.

4. When done, you’ll see Baku’s current temperature and wind speed on the page.