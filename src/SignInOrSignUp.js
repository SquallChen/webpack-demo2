import React, {Component} from 'react';
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import './signInOrSignUp.css'

export default class SignInOrSignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 'signIn'
    }
  }

  switch (e) {
    this.setState({
      selected: e.target.value
    })
  }

  render () {
    return (
      <div className="signInOrSignUp">
        <div className="panes">
          <nav className="nav">
              
                <input type="radio" value="signUp" id="signUp"
                  checked={this.state.selected === 'signUp'}
                  onChange={this.switch.bind(this)}
                /> <label htmlFor="signUp" className="signUpLabel">Sign Up</label>
              
                <input type="radio" value="signIn" id="signIn"
                  checked={this.state.selected === 'signIn'}
                  onChange={this.switch.bind(this)}
                /> <label htmlFor="signIn" className="signInLabel">Sign In</label>
            </nav>
          {this.state.selected === 'signUp' ?
            <SignUpForm formData={this.props.formData}
              onSubmit={this.props.onSignUp}
              onChange={this.props.onChange}
            />
            : null}
          {this.state.selected === 'signIn' ?
            <SignInForm formData={this.props.formData}
              onChange={this.props.onChange}
              onSubmit={this.props.onSignIn}
              onForgotPassword={this.props.onForgotPassword}
            />
            : null}
          
        </div>
      </div>
    )
  }
}