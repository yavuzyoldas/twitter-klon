import firebase from 'firebase/app';
import 'firebase/auth';
import history from '../history';
export const LOGIN = 'LOGIN';
export const LOGGED_IN = 'LOGGED_IN';
export const NOT_LOGGED_IN = 'NOT_LOGGED_IN';
export const LOGOUT = 'LOGOUT';

const loginSucces = (dispatch, response) => {

    console.log(response);
    history.push('/');
    dispatch({ type: LOGIN, payload: response.user });

}



export const login = (email, password) => {
    return async (dispatch) => {

        //firebase sorgusu  burda async yapıp asekron fonk kullanıp await ile cevabı bkleyebilirdik ancak bu kez tehn kullanarak bu işi gerçekleştirdik.
        firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
            loginSucces(dispatch, response);
        }).catch((err) => {
            console.log(err);
            firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
                loginSucces(dispatch, response);
            })
        })
    }
}
export const isLoggedIn = () => { // firebase istek atıp kullanıcının  durumunda değişiklik var mı yani session oturum var mı  sorguladık 
     // action içinde obje yada fonksiyon dönmek zorundayız
    return dispatch => {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
        if(user) { // yanıt olarak dönen user dolu ise yanş true ise login vardıe
            history.push('/');
            dispatch({
                type: LOGGED_IN,
                payload: user
            })

        }else{
            dispatch( {type: NOT_LOGGED_IN})
        }
        })
    }
};


export const logout = () => {
    // signOut isteği atttık bbu istektten değer dönmediği için  then fonk ile kullandık.
    return dispatch => {
        firebase.auth().signOut().then(() => { 
            dispatch({type: LOGOUT})
        });
    }
}