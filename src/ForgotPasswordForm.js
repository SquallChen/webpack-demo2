import React, {Component} from 'react';
import './ForgotPasswordForm.css'

export default class ForgotPasswordForm extends Component {
  render () {
    return (
      <div className="forgotPassword">
        <h3>
          Reset Password
        </h3>
        <form className="forgotPassword" onSubmit={this.props.onSubmit}> {/* 登录*/}
          <div className="row">
            <input type="text" value={this.props.formData.email}
              placeholder="Email" onChange={this.props.onChange.bind(null, 'email')}/>
          </div>
          <div className="row actions">
            <button type="submit" className="submit">Send Email</button>
            <a href="" onClick={this.props.onSignIn}>Return to login</a>
          </div>
        </form>
      </div>
    )
  }
}