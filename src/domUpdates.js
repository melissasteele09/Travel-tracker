import $ from "jquery";


let aTraveler;

const domUpdates = {

  displayTraveler(traveler, destinations) {
    $("#home-page").addClass("hidden")
    $("#traveler-view").removeClass("hidden")
    $("#welcome").html(`Welcome, ${traveler.name}, our favorite ${traveler.travelerType}!`)
    $("#total-cost-of-trips").html(`Your total spent is ${traveler.displayTotalSpent(destinations)}`)
  }
}

export default domUpdates
