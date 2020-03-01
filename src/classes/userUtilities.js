var moment = require('moment');

class UserUtility {
  constructor() {
  }

  getTodaysDate() {
    return moment().format().substring(0, 10).split("-").join("/")
  }

  displayDateTime() {
    return moment().format("LLLL")
  }

  getDatesFromLastYear() {
    let datesFromLastYear = []
    for (var i = 0; i < 365; i++) {
      datesFromLastYear.push(moment().subtract(i, "days").format("YYYY/MM/DD"))
    }
    return datesFromLastYear
  }

  convertNumberToDollars(number) {
    let dollar = "$" + number.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    return dollar
  }
}

export default UserUtility