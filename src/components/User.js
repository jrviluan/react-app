import React, { Component } from 'react';
import UserList from '../containers/UserList';
import UserDetail from '../containers/UserDetail';

class User extends Component {
    render() {
        return (
            <div>
                <h2>User List</h2>
                <UserList/>

                <h2>User Detail</h2>
                <UserDetail/>
            </div>
        );
    }
}
export default User;