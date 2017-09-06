import React, { Component } from 'react';
//import './UserDialog.css'
import {signUp,signIn,sendPasswordResetEmail} from './leanCloud'
import ForgotPasswordForm from './ForgotPasswordForm'
import SignInOrSignUp from './SignInOrSignUp'

export default class UserDialog extends Component{
    constructor(props){
     super(props)
     this.state = {
       selectedTab:'signInOrSignUp',
       formData:{
           username:'',
           password:'',
           email:'',
       }
     }
   }
   
  //注册事件
   signUp(e){
     e.preventDefault()
     let {email,username, password} = this.state.formData

     //注册验证
      if (email.length === 0 || username.length === 0 || password.length === 0) {
                  alert('注册信息不能为空')
                  return
              }
              var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
              if(!re.test(email)){
                  alert("请输入正确的邮箱")
                  return;
              }
              if(username.length<=3){
                  alert("用户名必须大于三个字符")
                  return;  
              }
              if(password.length<6){
                  alert("密码必须不小于6个字符")
                  return;  
              }
    

     let success = (user)=>{
       this.props.onSignUp.call(null,user)
     }
   
     let error = (error)=>{
       switch(error.code){
         case 202:
         alert('用户名已被占用')
         break
          case 200:
         alert('用户名不能为空')
         break
         default:
         alert(error)
         break
       }
     }
     signUp(email,username, password, success, error)
   }

   //登录事件
    signIn(e){
     e.preventDefault()
     
     let {username, password} = this.state.formData

       //登录
      if (username.length === 0 || username.password === 0) {
                  alert('用户名或密码不能为空')
                  return
           }

     let success = (user)=>{
       this.props.onSignIn.call(null,user) 
    }
    let error = (error)=>{
      switch(error.code){
        case 210:
        alert('用户名与密码不匹配')
        break
        case 211:
        alert('找不到用户')
        break
        default:
        alert(error)
        break
      }
    }
    signIn(username,password,success,error)
  }
  
  //监听用户名 密码输入内容
    changeFormData(key,e){
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.formData[key] = e.target.value
      this.setState(stateCopy) 
    }

  render(){ 

    return (
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
           {
             this.state.selectedTab === 'signInOrSignUp' ?
               <SignInOrSignUp
                 formData={this.state.formData}
                 onSignIn={this.signIn.bind(this)}
                 onSignUp={this.signUp.bind(this)}
                 onChange={this.changeFormData.bind(this)}
                 onForgotPassword={this.showForgotPassword.bind(this)}
               /> :
             <ForgotPasswordForm
               formData={this.state.formData}
               onSubmit={this.resetPassword.bind(this)}
               onChange={this.changeFormData.bind(this)}
               onSignIn={this.returnToSignIn.bind(this)}
             />}
        </div>
      </div>
    )
  }

   //展示重置密码界面
  showForgotPassword(){
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.selectedTab = 'forgotPassword'
    this.setState(stateCopy)
  }

//返回登录
  returnToSignIn(){
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.selectedTab = 'signInOrSignUp'
    this.setState(stateCopy)
  }

  //重置密码
  resetPassword(e){
    e.preventDefault()
     let success = (success) => {
            //重置密码成功 隐藏忘记密码表单
            let stateCopy = JSON.parse(JSON.stringify(this.state))
            stateCopy.selectedTab = 'signInOrSignUp'
            //清空已输入的邮箱内容
            stateCopy.formData.email = ''
            this.setState(stateCopy)
            alert('重置密码成功，请查看邮箱。')
        }
       let error = (error) => {
          switch(error.code){
            case 217:
            alert('邮箱不能为空')
            break
            case 205:
            alert('找不到电子邮箱地址对应的用户')
            break
            default:
            alert(error)
            break
          }
        
        }
    sendPasswordResetEmail(this.state.formData.email,success, error)
  }
}

