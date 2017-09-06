import React, {Component} from 'react';
import './SignUpForm.css'


export default class SignUpForm extends Component {
  
  render () {
   
    return (
      <form className="signUp" onSubmit={this.props.onSubmit.bind(this)}> {/* 注册*/}
        <div className="row">
          <input type="text" value={this.props.formData.email}
            placeholder="Email" onChange={this.props.onChange.bind(null, 'email')}/>
        </div>
        <div className="row">
          <input type="text" value={this.props.formData.username}
            placeholder="Username" onChange={this.props.onChange.bind(null, 'username')}/>
          {/* bind 不仅可以绑定 this，还可以绑定第一个参数 */}
        </div>
        <div className="row">
          <input type="password" value={this.props.formData.password}
            placeholder="Password" onChange={this.props.onChange.bind(null, 'password')}/>
        </div>
        <div className="row actions">
          <button type="submit" className="submit">Sign Up</button>
        </div>
      </form>
    )
  }
}
