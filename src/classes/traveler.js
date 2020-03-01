import UserUtility from './userUtilities.js';


class Traveler extends Utility {
  constructor(info, trips) {
    super()
    this.id = info.id,
    this.name = info.name,
    this.travelerType = info.travelerType,
    this.trips = trips
  }
  displayUpcomingTrips() {
    return this.trips.filter(trip => trip.status === 'approved')
  }

}


export default Traveler
