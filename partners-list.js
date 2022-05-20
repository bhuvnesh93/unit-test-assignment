const data = require('./partners.json');

let latitude = 51.515419;
let longitude = -0.141099;

function listMembers() {
  const result = data
    .filter(
      (jsonObject) =>
        getDistanceFromLatLonInKm(
          latitude,
          longitude,
          jsonObject.offices[0].coordinates.split(',')[0],
          jsonObject.offices[0].coordinates.split(',')[1]
        ) < 100
    )
    .sort((jsonObject1, jsonObject2) => {
      jsonObject1.organization.toUpperCase() < jsonObject2.organization.toUpperCase() ? -1 : 1;
    })
    .map((jsonObject) => ({
      name: jsonObject.organization,
      address: jsonObject.offices[0].address,
    }));
  return result;
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export default listMembers;
