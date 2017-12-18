import { FETCHING_DATA, REGISTER_USER } from '../constants/constants'

export function fetchData() {
  console.log('fetching data');
  return {
    type: FETCHING_DATA
  }
}

export function registerUser(email,password) {
  console.log('registering user', email)
  return {
    type: REGISTER_USER,
    data:{email,password}
  }
}