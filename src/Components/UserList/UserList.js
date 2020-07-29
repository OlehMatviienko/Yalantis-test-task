import React from 'react';
import './UserList.css';
import User from '../User/User';

class UserList extends React.Component{
    render(){
        if(this.props.users){
        return(
        <ul>
            {this.props.users.map((user)=>{
                return <User key={user.id} user={user}/>
            })}
        </ul>
        )
    }
    else{
        return null;
    }
    }
}

export default UserList;