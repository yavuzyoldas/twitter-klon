import React, { Component } from 'react'
import { Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';
import Menu from './menu/menu';
import Tweets from './tweet/tweets';
import MyTweets from './tweet/myTweets';
import NewTweet from './tweet/newTweet/newTweet';
import Login from './login/login';
import firebase from  'firebase/app';
import { isLoggedIn } from '../actions';
//BrowserRouter <BrowserRouter></BrowserRouter> direkt kullanıbiliyo ancak Router kullanırsak ona dışarıdan parametre history={createHistory()} vermemiz gerekiyor.
// <Route path='/page1' exact component={}></Route> exact ile yanlızca verilen path ne ise ona gitmesini sağladık.
//<Router> </Router> içine tek bir kapsayıcı tag alır.
//Link verirken <a href='x'>sayfa 1</a> şeklinde kullanmamamızın sebebi browser lar linkleri cashlleyerek sayfaları hafızasında tutuyor.Ancak react ta stateler var.
//Bu yüzden linkleri <Link to='x'>sayfa 1</Link> tagı kullanarak vermeliyiz.
class App extends Component {


  componentWillMount() { //componenrdidmount ta componet tamamlanıca çalışıo wiilmount başlangıçta çalışıo firebase ile bağlantıyı başlangıçta olsun diye willmount yazdık.
    const config = {
      apiKey: "AIzaSyBND84hVsE0kkUsdXuxyfDpoqjaNhiLfME",
      authDomain: "twitterklon-react-dc294.firebaseapp.com",
      databaseURL: "https://twitterklon-react-dc294.firebaseio.com",
      projectId: "twitterklon-react-dc294",
      storageBucket: "twitterklon-react-dc294.appspot.com",
      messagingSenderId: "242524618910"
    };
    firebase.initializeApp(config);

    this.props.isLoggedIn();
    //uygulama yenilendiğinde fonksiyonun çalışmasını tetikliyoruz bu sayede var olan oturum varsa onun bilgisini sayfa yenilense dahi tutmuş oluyoruz.
  }
  

  render() {
    return (
      <div>

        <Router history={history}>
          <div>
            <Menu />
            <Switch>
              <Route path='/' exact component={Tweets}></Route>
              <Route path='/myTweets' exact component={MyTweets}></Route>
              <Route path='/newTweet' exact component={NewTweet}></Route>
              <Route path='/editTweet' exact component={NewTweet}></Route>
              <Route path='/login' exact component={Login}></Route>
            </Switch>
          </div>
  
        </Router>
      </div>
    )
  }
  ///editTweet için yeni bir component oluşturmadık newTweet componentini kullanıyoruz.
}
export default connect(null,{isLoggedIn}) (App);             