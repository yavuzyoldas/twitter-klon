import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';

import './login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind();
  }



  onChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render() {
    console.log(this.state);
    return (

      <div className="login-container">
        <div className="login-wrapper">
          <div className=" login-item ui input">
            <input type="text" placeholder="İsminiz" name="email" value={this.state.email} onChange={this.onChange} />
          </div>
          <div className="login-item ui input">
            <input type="password" placeholder="Şifreniz" name="password" value={this.state.password} onChange={this.onChange} />
          </div>
          <button className="login-item ui primary button" onClick={() => {
            const { email, password } = this.state;
            this.props.login(email, password)
          }}>Giriş Yap</button>
        </div>
      </div>

    )
  }

}
export default connect(null, { login })(Login);