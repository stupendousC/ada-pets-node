// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = "https://petdibs.herokuapp.com/pets/";
const bogus_URL = "https://petdibs.herokuapp.com/bogus/";
let ENDPOINT;

// WAVE 1
const listPets = () => {
  axios.get(BASE_URL) 
  .then ((response) => {
    // this fill out the listPets function. This will need to make a call to the Pets API and should 
    setResult(response.data);
  })
  .catch ((error) => {
    // call setError with an error message if the request failss
    setError("you done messed up!");
  });
}

// WAVE 2
const showDetails = (selectedPet) => {
  ENDPOINT = `${petID}`;
  axios.get(BASE_URL+ENDPOINT)
  .then ((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError("Ain't nobody by that ID here!");
  })
  .finally(() => {
    if (!selectedPet) {
      setError("You tried to show details for a pet without selecting it!");
      return;
    }
  });
  


  // * setError should be passed an error message.  (You may need to write this.)
  //   * The tests for this wave are looking for an error message that will *include* two specific words inside of the string. (It does this with Regex). Part of this wave is to read through the tests and determine what two words should be inside of the error message string.  
}

const removePet = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }

  // Fill out as part of Wave 3.
}

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
}

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets: listPets,
  showDetails: showDetails,
  removePet: removePet,
  addPet: addPet
}
