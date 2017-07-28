import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';

class MyDatePicker extends Component {
    constructor(props){
        super(props)
        this.state = {date:this.props.Date}
    }

    render(){
        return (
            <DatePicker
                style={{width: 200}}
                date={this.props.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="1980-01-01"
                maxDate="2025-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={this.props.onDateChange}
            />
        )
    }
}

export default MyDatePicker;