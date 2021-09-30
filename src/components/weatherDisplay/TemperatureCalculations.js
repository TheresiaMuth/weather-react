export function calculateFahrenheitToCelcius(tempFahrenheit) {
  return ((tempFahrenheit - 32) * 5) / 9;
}

export function calculateCelciusToFahrenheit(tempCelcius) {
  return (tempCelcius * 9) / 5 + 32;
}
