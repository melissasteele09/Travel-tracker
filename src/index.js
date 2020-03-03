
import $ from "jquery";
import "./css/base.scss";
import "./images/water.jpg"
import databaseController from "./databaseController.js"
import domUpdates from "./domUpdates.js"

$("#submit").on("click", function() {
  event.preventDefault()
  logInInput()
})

let logInInput = () => {
  let userName = $('#username-input');
  let password = $('#password-input');
  let allUsernames = []

  for (var i = 0; i <= 50; i++) {
    allUsernames.push(`traveler${i}`)
  }
  if (allUsernames.includes(userName.val().toLowerCase()) && password.val() === 'travel2020') {
    logInTraveler(userName)
  }
  if (userName.val().toLowerCase() === 'agency' && password.val() === 'travel2020') {
    logInAgency()
  }
}

let logInTraveler = (userName) => {
  let id = userName.val().substring(8, 10)
  databaseController.loadUser(id)
}

let logInAgency = () => {
  databaseController.loadAgency()
}
