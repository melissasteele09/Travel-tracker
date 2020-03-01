import Agency from './classes/agency.js'
import domUpdates from './domUpdates.js'
import Traveler from './classes/traveler.js'

let allUsers;
let allTrips;
let allDestinations;
let traveler;

const userData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers')
  .then(response => response.json())
  .then(data => data.travelers)
  .catch(error => console.log(error.message))

const tripsData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips')
  .then(response => response.json())
  .then(data => data.trips)
  .catch(error => console.log(error.message))

const destinationsData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/destinations/destinations')
  .then(response => response.json())
  .then(data => data.destinations)
  .catch(error => console.log(error.message))


Promise.all([userData, tripsData, destinationsData])
  .then(data => {
    allUsers = data[0]
    allTrips = data[1]
    allDestinations = data[2]
  })


const databaseController = {

  loadUser(id) {
    let user = allUsers[id - 1]
    let trips = allTrips.filter(trip => trip.userID === parseInt(id))
    traveler = new Traveler(user, trips)
    domUpdates.loadTraveler(traveler, allDestinations)
  },


export default databaseController;
