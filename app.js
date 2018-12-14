const fetchTruckData = require('./src/truckApi');
const createPrompt = require('./src/inputPrompt');
const columnify = require('columnify');

const trucksPerPage = 10;

const printOpenTrucks = async () => {
  //Client Side Pagination Offset
  let offset = 0;
  let seeMore = false;
  const results = await fetchTruckData();
  if (results.length + 1 > trucksPerPage) {
    do {
      console.log(columnify(results.slice(offset, offset + trucksPerPage)));
      offset += trucksPerPage;
      seeMore = results.length + 1 > offset ? await createPrompt() : false;
    } while (seeMore);
  } else {
    console.log(columnify(results));
  }
};

printOpenTrucks();
