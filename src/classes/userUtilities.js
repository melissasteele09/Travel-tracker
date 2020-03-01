var moment = require('moment');

class UserUtility {
  constructor() {
  }

  getTodaysDate() {
    return moment().format().substring(0, 10).split("-").join("/")
  }


export default UserUtility
