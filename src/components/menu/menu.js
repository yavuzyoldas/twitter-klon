import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';
//import { login } from '../../actions';
class Menu extends Component {

    render() {

        const { isLoggedIn } = this.props.auth;
        return isLoggedIn === true ? (
            <div className="ui secondary  menu">
                <Link className="item" to='/'>Tweetler</Link>
                <Link className="item" to='/myTweets'>Benim Tweetlerim</Link>
                <Link className="item" to='/newTweet'>Tweetle</Link>
                <div className="right menu">
                    <Link className="item" to='/' onClick={() => {this.props.logout();}}>Çıkış Yap</Link>
                </div>
            </div>
        ) : (
                <div className="ui secondary  menu" >
                    <Link className="item" to='/'>Tweetler</Link>
                    <div className="right menu">
                        <Link className="item" to='/login'>Giriş Yap</Link>
                    </div>
                </div >
            )
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    //const {email,isLoggedIn} = state;

    return {
        auth: state.auth
    }

}


export default connect(mapStateToProps , { logout })(Menu);