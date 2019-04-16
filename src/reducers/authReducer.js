import { LOGIN, LOGGED_IN , LOGOUT } from '../actions'

const INITIAL_STATE = { //state ilk değer ataması yaptık email boş login e false atadık.Daha sonra login olunca bu statelerin değişmesini  sağlıyacaz.
   email: '',
   isLoggedIn: false
};


// state alıp state dönücek parametre olarak eski state i alıcaz ve action
export default (state = {}, action) => {

    if (action.type === LOGIN || action.type === LOGGED_IN ) {
        return {
        email: action.payload.email,
        isLoggedIn: true
        };
    }else if(action.type === LOGOUT ){
      return INITIAL_STATE;
    }
    return state;

}