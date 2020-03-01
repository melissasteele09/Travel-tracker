import UserUtility from './userUtilities.js';


class Traveler extends Utility {
  constructor(data, trips) {
    super()
    this.id = data.id,
    this.name = data.name,
    this.travelerType = data.travelerType,
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

  displayTotalSpent(destinationsData) {
      let subTotal = this.displayAllApprovedTrips().reduce((totalSpent, currentTrip) => {
        destinationsData.forEach(destination => {
          if (currentTrip.destinationId === destination.id) {
            totalSpent += (((destination.estimatedLodgingCostPerDay * currentTrip.duration) + (destination.estimatedFlightCostPerPerson)) * currentTrip.travelers)
          }
        })
        return totalSpent
      }, 0)
      let agencyFee = subTotal * .10
      let total = subTotal + agencyFee;
      return this.convertNumberToDollars(total)
    }
}



export default Traveler
