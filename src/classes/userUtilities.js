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


export default UserUtility
