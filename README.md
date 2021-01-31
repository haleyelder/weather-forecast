# Weather Forecast 
v3 -- [live site](https://haleyelder.github.io/weather-forecast/) - deployed with [Github pages](
(https://create-react-app.dev/docs/deployment#github-pages)

The current rendition of this weather forecast dashboard is to show the current conditions and a couple days forecast in the future. Only a few days could be shown for the future forecast due to the free usage tier switching from using the freeCodeCamp recommended [OpenWeather API](https://openweathermap.org/) to using [Weather API](https://www.weatherapi.com) to try out something different. 

I encountered some further issues with the current and forecast data in the endpoint call which I'll be handling in enhancements listed below with further troubleshooting.

--------------------------
Future Enhancements/Review (not in any particular order):
- Color scheme: may decide to change at some point, why not?
- Attempted to custom format local and last updated time, but ran into API call data issues or were not consistently returned. This also occurred with current conditions description but not in the future forecast.
- Display conditions with updated icons using [Ionicons](https://ionicons.com). May find moon phase related ones to update those areas of the forecast blocks as well.
- Browser asking for [geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to provide forecast. Previous versions included this functionality so should not be too difficult.
- Provide options to convert between metric and imperial (C/F, mph/kph, etc) measurements where applicable.

---------------------------------
CHANGELOG

[v2 Codepen](https://codepen.io/haleyelder/full/WdZMGZ)

[v1 Codepen](https://codepen.io/haleyelder/full/XdzxBx)

