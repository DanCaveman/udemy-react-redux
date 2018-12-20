import React from 'react';
import { fetchUser } from '../actions';

const UserHeader = ({userId}) => {
    return (
        <div>
            username: {userId}
        </div>
    );
};

const mapStateToProps = (state) => {
    //user: state.users.filter(user => user.id);
}

export default UserHeader;