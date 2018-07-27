const API_ID =  '7b7a1a76'
const APP_KEY = 'f04c1976b0dcdf3c5f889aeea11f7e35'
const APP_URL = 'https://api.edamam.com'

export function fetchFood (food = '') {
  food = food.trim()

  return fetch(`${APP_URL}/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}