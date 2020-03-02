import $ from "jquery";
import Moment from 'moment'


let aTraveler;

const domUpdates = {

  displayTravelerView(traveler, destinations) {
    $("#home-page").addClass("hidden")
    $("#traveler-view").removeClass("hidden")
    $("#client-welcome").html(`Welcome, ${traveler.name}, our favorite ${traveler.travelerType}!`)
    $("#total-cost-of-trips").html(`Your total spent is ${traveler.displayTotalSpent(destinations)}`)
    aTraveler = traveler;
    allDestinations = destinations;
  },

  displayAgencyView(agency, allDestinations) {
    console.log("Hello!")
      $("#home-page").addClass("hidden")
      $("#agency-view").removeClass("hidden")
      $("#agency-welcome").html(`Hello, Agent!`)
      $("#travelers-count").html(`You have ${agency.getTodaysTravelers().length} travelers today!`)
         agency.displayPendingRequests().forEach(request => {
           $("#agency-pending-trips").append
           (`<section class="agency-pending-trip">

           <div class="trip-info">
           <img src="${request.location[0].image}" width="100%" height="auto" alt="${request.location[0].alt}">
           <h2>${request.location[0].destination}</h2>
           </div>

           <div class="trip-summary">
           <h3>Trip to ${request.location[0].destination.split(',')[0]}.</h3>
           <h3>Start date: ${request.date}</h3>
           <h3>Trip duration: ${request.duration} days </h3>
           <h3>Traveler count: ${request.travelers} </h3>
           <h3>Status: ${request.status}
           </div>

           </section>`)
         })
}
}

export default domUpdates
