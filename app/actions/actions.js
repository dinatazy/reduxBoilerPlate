import { FETCHING_DATA } from '../constants/constants'

export function fetchData() {
  console.log('fetching data');
  return {
    type: FETCHING_DATA
  }
}