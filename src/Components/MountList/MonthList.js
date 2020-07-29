import React from 'react';
import "./MonthList.css"
import Month from '../Month/Month';

class MonthList extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            openMonthId: null,
        }
    }
    onMonthEnter = (openMonthId) => {
        this.setState({openMonthId});   
        this.props.changeList(openMonthId);

}
    render(){
        return(
            <div className="MonthsList">
                <ul>
                {this.props.months.map(month=>{
                    return <Month key={month.id} month={month} users={this.props.users[parseInt(month.id-1,10)]} onMonthEnter={this.onMonthEnter.bind(this,month.id)} />;

                })}
                </ul>
            </div>
        )
    }
}

export default MonthList;