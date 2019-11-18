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
  ENDPOINT = `${selectedPet}`;
  axios.get(BASE_URL+ENDPOINT)
  .then ((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    if (!selectedPet) {
      setError("Can't show details if you don't select a pet");
    } else {
      setError("Show details failed");
    }
  });
}

// WAVE 3
const removePet = (selectedPet) => {
  ENDPOINT = `${selectedPet}`;
  axios.delete(BASE_URL+ENDPOINT)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    if (!selectedPet) {
      setError("We can't remove a pet if you don't select one");
      // return;
    } else {
      setError("failed to remove a pet lol");
    }
  });
}


// WAVE 4
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
