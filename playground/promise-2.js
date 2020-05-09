const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `http://www.datasciencetoolkit.org/maps/api/geocode/json?&address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if(!error && body.status === 'OK') {
                resolve(body.results[0].geometry.location);
            } else {
                reject('Location not found');
            }
        });
    });
};

geocodeAddress('00000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});

