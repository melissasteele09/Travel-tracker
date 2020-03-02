var moment = require("moment");

class UserUtility {
  constructor() {
  }

  displayDateTime() {
    return moment().format("LLLL")
  }

  getTodaysDate() {
    return moment().format().substring(0, 10).split("-").join("/")
  }

  getDatesFromLastYear() {
    let datesFromLastYear = []
    for (var i = 0; i < 365; i++) {
      datesFromLastYear.push(moment().subtract(i, "days").format("YYYY/MM/DD"))
    }
    return datesFromLastYear
  }

  getDestinationById(destinations, id) {
  return destinations.filter(destination => destination.id === parseInt(id))[0]
}

  convertNumberToDollars(number) {
    let dollar = "$" + number.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    return dollar
  }
}

export default UserUtility
