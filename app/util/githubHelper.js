import axios from 'axios'

const id = ""
const sec = "fc31053fb6290ae48ca4acda7a05a4b3ea071fa5"

const helpers = {
  getPlayersInfo(username) {
    return axios.get('https://api.gihub.com/users/' + username + param)
  }
}

export default helpers
