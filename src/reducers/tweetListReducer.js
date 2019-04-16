import { FETCH_ALL_TWEETS } from '../actions'


// state alıp state dönücek parametre olarak eski state i alıcaz ve action
export default (state = [], action) => {

    if (action.type === FETCH_ALL_TWEETS ) {
        return action.payload;
    }
    return state;

}