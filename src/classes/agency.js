import UserUtility from './userUtilities.js';

class Agency extends UserUtility {
  constructor(trips, users) {
    super()
    this.trips = trips;
    this.users = users;
  }
}


export default Agency
