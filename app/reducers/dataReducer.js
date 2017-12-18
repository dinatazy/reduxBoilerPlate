import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, REGISTER_USER } from '../constants/constants'
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      console.log('fetching data is called!', action);
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      console.log('fetching data Success', action);
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCHING_DATA_FAILURE:
      console.log('data failure red')
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case REGISTER_USER:
      console.log('registering user action', action);
      return {
        ...state,
        data: [],
        isFetching: true,
      }
    default:
      return state
  }
}
