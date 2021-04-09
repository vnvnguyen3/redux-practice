import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/userActions';

class User extends Component {

    render(){
        return (
            <div>
                <h1>{this.props.user.user.userName}</h1>
                <p>Name: {this.props.user.user.firstName} {this.props.user.user.lastName}</p>
                <p>Email: {this.props.user.user.email}</p>
                <NavLink to="/">
                    <button type="submit" onClick={this.props.logout}>Log Out</button>
                </NavLink>
            </div>
        )
    }
}

User.propTypes= {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.users.profile
})

export default connect(mapStateToProps, {logout})(User);