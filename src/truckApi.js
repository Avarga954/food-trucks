const axios = require('axios');
const axiosRetry = require('axios-retry');
const moment = require('moment');

//Api Endpoint Structuring
const localDate = moment.utc().local();
const dayOfWeek = localDate.format('d');
const localTime = localDate.format('HH:mm');
const queryString = `$select=applicant,location
  &$where=start24 <= '${localTime}' AND end24 >='${localTime}' AND dayorder = ${dayOfWeek}
  &$order=applicant`;

// Http request for sfgov foodtruck data
const fetchTruckData = () => {
  // Configure axios to try three times
  axiosRetry(axios, { retries: 3 });
  return axios(`https://data.sfgov.org/resource/bbb8-hzi6.json?${queryString}`)
    .then(({ status, data }) => {
      if (status === 200) {
        return data;
      }
    })
    .catch(async error => {
      if (error.response) {
        // Exit App after several failed api call attempts
        exitApp(`Api Exception Thrown Status Code: ${error.response.status}`);
      } else {
        //Fire some sort of loggin or notification
        exitApp('Unknown Exception Thrown');
      }
    });
};

const exitApp = msg => {
  console.log(msg);
  process.exit();
};

module.exports = fetchTruckData;
