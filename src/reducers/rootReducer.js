import constants from './../constants';
const {types} = constants;

const rootReducer = (state = {usernames: []}, action) => {
  let newPerson;
  let newState;
  switch (action.type) {
    case types.FIND_PERSON:
      newPerson = {
        isFetching: true,
        firstName: action.firstName,
        lastName: action.lastName,
        usernames: []
      }
      newState = Object.assign({}, state, newPerson)

      return newState;
    case types.RECEIVE_PERSON:
      newPerson = Object.assign({}, state, {
        isFetching: false,
        firstName: action.firstName,
        lastName: action.lastName,
        usernames: action.usernames
      });
      newState = Object.assign({}, state, newPerson);

      return newState;
    default:
      return state;
  }
}

export default rootReducer;
