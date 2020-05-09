const request = require("request");

var getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/e24a5031e206881b96ccb58e4d8118d3/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      } else {
        callback("Unable to fetch weather");
      }
    }
  );
};

module.exports = {
  getWeather
};
