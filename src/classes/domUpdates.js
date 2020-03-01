import $ from 'jquery';


let aTraveler;

const domUpdates = {

  loadTraveler(traveler, destinations) {
    $('#home-page').css('display', 'none')
    $('#traveler-view').css('display', 'flex')
    $('.welcome').html(`Welcome, ${traveler.name}, our favorite ${traveler.travelerType}!`)
    $('#total-cost-of-trips').html(`Your current total spent is ${traveler.displayTotalSpent(destinations)}`)
    aTraveler = traveler;
  }

}

export default domUpdates
