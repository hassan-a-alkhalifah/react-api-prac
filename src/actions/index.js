import * as types from './../constants/ActionTypes';

export const findPerson = (firstName, lastName) => ({
  type: types.FIND_PERSON,
  firstName,
  lastName
});

export const receivePerson = (firstName, lastName, usernames) => ({
  type: types.RECEIVE_PERSON,
  firstName,
  lastName,
  usernames
})

export function fetchPerson(query1, query2) {
  return function (dispatch) {
    const firstName = query1;
    const lastName = query2;
    dispatch(findPerson(firstName, lastName));
    return fetch('http://api.pipl.com/search/?first_name=' + firstName + '&last_name=' + lastName + '&key=0lynf9il1sku5mekmbuma3ex').then(
      response => response.json(),
      error => console.log("BAD", error)
    ).then(function(json) {
      if (json.possible_persons[0].usernames) {
        const usernameList = json.possible_persons[0].usernames;
        dispatch(receivePerson(firstName, lastName, usernameList));
      } else {
        console.log("fail")
      }
    })

  }
}
