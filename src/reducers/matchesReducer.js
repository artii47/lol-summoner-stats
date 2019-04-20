import _ from 'lodash';

export default (state = {}, action) => {
  switch(action.type){
    case 'FETCH_MATCHES':
      return {...state, ..._.mapKeys(action.payload, 'gameId')}
    default: 
      return state
  }
}