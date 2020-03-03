import $ from "jquery";
import Moment from 'moment'


let aTraveler;
let allDestinations;

const domUpdates = {

  displayTravelerView(traveler, destinations) {
    $("#home-page").addClass("hidden")
    $("#traveler-view").removeClass("hidden")
    $("#traveler-welcome").html(`Welcome, ${traveler.name}, our favorite ${traveler.travelerType}!`)
    $("#total-cost-of-trips").html(`You have spent ${traveler.displayTotalSpent(destinations)} on fabulous vacations!`)
    aTraveler = traveler;
    allDestinations = destinations;
  },


  displayAgencyView(agency, allDestinations) {
    $("#home-page").addClass("hidden")
    $("#agency-view").removeClass("hidden")
    $("#agency-welcome").html("Hello, Out of Town Agent!")
    $("#travelers-count").html(`You have ${agency.getTodaysTravelers().length} travelers today!`)

    agency.displayPendingRequests().forEach(request => {
      $("#agency-pending-trips").html(`
           <section class="agency-pending-trip"
           <div class="destination-info">
           <h2>${request.location[0].destination}</h2>
           <img src="${request.location[0].image}" width="25%" height="auto" alt="${request.location[0].alt}">
           </div>

           <div class="trip-info">
           <h3>Trip to ${request.location[0].destination.split(',')[0]}.</h3>
           <h3>Leave Date: ${request.date}</h3>
           <h3>Trip Duration: ${request.duration} days </h3>
           <h3>Number of Travelers: ${request.travelers} </h3>
           <h3>Status: ${request.status.toUpperCase()}
           </div>

           </section>`)
    })
  }
}

export default domUpdates
