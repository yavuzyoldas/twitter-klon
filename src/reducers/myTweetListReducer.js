import { FETCH_MY_TWEETS } from '../actions'


// state alıp state dönücek parametre olarak eski state i alıcaz ve action
export default (state = [], action) => {

    if (action.type === FETCH_MY_TWEETS ) {
        return action.payload;
    }
    return state;

}