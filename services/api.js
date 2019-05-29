import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://kpp-lab4.herokuapp.com'
  })
}
