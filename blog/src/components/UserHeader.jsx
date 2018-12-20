import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component{
    componentDidMount(){
        const { user } = this.props;

    }

    render(){
        const { user } = this.props;
        
        if(!user){
            this.props.fetchUser(this.props.userId);
            return null;
        }

        return (
            <div className="header" >
                Author Name: {user.name}
            </div>
        );
    }
};


const mapStateToProps = (state, ownProps) =>{
    return {user: state.users.find(user => user.id === ownProps.userId)};
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);