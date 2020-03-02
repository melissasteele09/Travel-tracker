import UserUtility from './userUtilities.js';

class Agency extends UserUtility {
  constructor(trips, users) {
    super()
    this.trips = trips;
    this.users = users;
  }

  displayPendingRequests() {
  return this.trips.filter(trip => trip.status === 'pending')
  }
}


export default Agency
