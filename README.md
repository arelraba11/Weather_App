# Weather App

A simple and responsive weather application built with React.  
The app allows users to search for any city and get real-time weather information using the [OpenWeather API](https://openweathermap.org/).

---

## Features

- Search weather by city name  
- Displays temperature in Celsius  
- Shows current date and location  
- Modern and responsive UI with background images  
- Fast and lightweight  

---

## Tech Stack

- React (hooks)  
- CSS3 (modern design & responsiveness)  
- OpenWeather API  

---

## Project Structure

```text
src/
├── assets/           # Images (backgrounds)
├── App.js            # Main app logic
├── index.js          # Entry point
├── index.css         # Global styles
```

---

## Environment Variables

Create a `.env.local` file in the root folder:

```env
REACT_APP_WEATHER_KEY=your_api_key_here
```

Replace `your_api_key_here` with your [OpenWeather](https://openweathermap.org/api) API key.

---

## Run Locally

Clone the project:

```bash
git clone https://github.com/arelraba11/Weather_App.git
cd Weather_App
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

---