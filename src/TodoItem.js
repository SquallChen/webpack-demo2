import React, { Component } from 'react';
import './TodoItem.css'

 export default class TodoItem extends Component {
   render(){
     
     return ( 
     <div className="TodoItem">
      <label className="toggle"><input type="checkbox"  checked={this.props.todo.status ==='completed'}
       onChange={this.toggle.bind(this)}/><div className="hook"></div></label><span className="title">{this.props.todo.title}</span>
       <span className="complete">{cc(converSion(this.props.todo.status))}</span>
       <button id="btn" onClick={this.delete.bind(this)}>χ</button>  
     </div>
     )
     
   }
   //设置待办完成 未完成
    toggle(e){
      this.props.onToggle(e,this.props.todo)
     }
       //删除待办
     delete(e){
       this.props.onDelete(e,this.props.todo)
     }
     
    
 }
 //判断返回的值
 function converSion(item){
    if(item==='completed'){
      return '已完成'
    }else{
      return '未完成'
    }
  }
  //并添加改变的css样式
  function cc(item){
    if(item==='已完成'){
     return <span className="green">已完成</span>
    }else{
     return <span className="red"> 未完成</span>
    }
  }
