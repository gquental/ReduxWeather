import axios from 'axios'

const API_KEY = 'bf4588531a3a88740f5edac3b8af817e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  console.log('Request:', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
