import $ from "jquery";
import Moment from 'moment'


let aTraveler;

const domUpdates = {

  displayTraveler(traveler, destinations) {
    $("#home-page").addClass("hidden")
    $("#traveler-view").removeClass("hidden")
    $("#client-welcome").html(`Welcome, ${traveler.name}, our favorite ${traveler.travelerType}!`)
    $("#total-cost-of-trips").html(`Your total spent is ${traveler.displayTotalSpent(destinations)}`)
    aTraveler = traveler;
    allDestinations = destinations;
  }

  displayAgency(agency, allDestinations) {
      $("#home-page").addClass("hidden")
      $("#agency-view").removeClass("hidden")
      $("#agency-welcome").html(`Hello, Agent!`)

}
}

export default domUpdates
