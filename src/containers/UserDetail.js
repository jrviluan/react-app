import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render(){
        if(!this.props.user){
            return (<h5>Select a user...</h5>);
        }
        return (
            <div>
                <h2>Name: {this.props.user.firstname} {this.props.user.lastname}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);