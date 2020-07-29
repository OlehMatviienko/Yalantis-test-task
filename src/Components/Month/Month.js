import React from 'react';
import "./Month.css"

class Month extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            showUsers: false,
            backgroundColor: ''
        }
    }
    componentDidMount(){
        if(this.props.users.length>7){
            if(this.props.users.length>10){
                this.setState({backgroundColor: '#F62121 '});
            }
            else{
                this.setState({backgroundColor: '#40E336 '});
            }
        }
        else{
            if(this.props.users.length>2){
                this.setState({backgroundColor: '#3778FB '});
            }
            else{
                this.setState({backgroundColor: '#A4AFA3 '});
            }
        }
    }
    render(){
        return (
            <li className='MonthLi'>
            <div className='Month' style={{backgroundColor:this.state.backgroundColor}}
            onMouseOver={()=>{this.props.onMonthEnter()}}
            >
            <h2 className="MonthName">{this.props.month.name}</h2>
            </div>
            </li>
        )
    }
}

export default Month;