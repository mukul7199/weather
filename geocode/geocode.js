const request = require('request');

const geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);

    request({
        url: `http://www.datasciencetoolkit.org/maps/api/geocode/json?&address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if(error) {
			callback('Unable to connect to DataScience servers');
        } else if(body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if(body.status === 'OK') {
			callback(undefined, {
				address: body.results[0].address_components[0].long_name,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			});
        }
    }); 
}

module.exports = {
	geocodeAddress
}