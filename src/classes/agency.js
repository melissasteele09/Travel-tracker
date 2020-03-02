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
  return this.trips.filter(trip => trip.status === 'pending')
  }

}


export default Agency
