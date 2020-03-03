import UserUtility from './userUtilities.js';

class Agency extends UserUtility {
  constructor(trips, users) {
    super()
    this.trips = trips;
    this.users = users;
  }


  displayApprovedRequests() {
    return this.trips.filter(trip => trip.status === 'approved')
  }

  displayPendingRequests() {
    console.log(this.users)
    let pendingTrips = this.trips.filter(trip => trip.status === 'pending')
    return pendingTrips
  }

  getTodaysTravelers() {
    return this.trips.filter(trip => trip.date === this.getTodaysDate())
  }
}


export default Agency
