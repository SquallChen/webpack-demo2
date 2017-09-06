import React, {Component} from 'react';
import './SignInForm.css'

export default class SignInForm extends Component {
  render () {
    return (
      <form className="signIn" onSubmit={this.props.onSubmit}> {/* 登录*/}
        <div className="row">
          <input type="text" value={this.props.formData.username}
            placeholder="Username" onChange={this.props.onChange.bind(null, 'username')}/>
        </div>
        <div className="row">
          <input type="password" value={this.props.formData.password}
            placeholder="Password" onChange={this.props.onChange.bind(null, 'password')}/>
        </div>
        <div className="row actions">
          <button type="submit" className="submit">Sign In</button>
          <a href="" onClick={this.props.onForgotPassword}>Forgot Password?</a>
        </div>
      </form>
    )
  }
}