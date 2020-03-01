import UserUtility from './userUtilities.js';


class Traveler extends Utility {
  constructor(info, trips) {
    super()
    this.id = info.id,
    this.name = info.name,
    this.travelerType = info.travelerType,
    this.trips = trips
  }

  displayAllApprovedTrips() {
    return this.trips.filter(trip => trip.status === 'approved')
  }

  displayPendingTrips() {
    return this.trips.filter(trip => trip.status === 'pending')
  }

  displayFutureTrips() {
  return this.trips.filter(trip => trip.date > this.getTodaysDate())
  }

  displayPastTrips() {
  return this.trips.filter(trip => trip.date < this.getTodaysDate())
  }

}



export default Traveler
