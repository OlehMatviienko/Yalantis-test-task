import React from 'react';
import './User.css';

class User extends React.Component{
    render(){
        return (<li className="user">
  <p className="LastFirstName">{this.props.user.lastName} {this.props.user.firstName}  </p>
               <p> Day of Birth: </p> <p> {this.props.user.dob}</p>
               <p>id: </p>{this.props.user.id}             
                </li>
        )
    }
}

export default User;