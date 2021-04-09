import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {

    render() {
        return (
            <div>
                <NavLink to="/">
                    Home
                </NavLink>
                <br />
                <NavLink to="/login">
                    Login
                </NavLink>
                <br />
                <NavLink to="/restaurant">
                    Restaurants
                </NavLink>
                <br />
                <NavLink className="nav-link" to={`/users/${this.props.user.user.userName}`}>
                    {this.props.user.user.userName}
                </NavLink>
            </div>
        )
    }
}

Header.propTypes= {
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.users.profile
})

export default connect(mapStateToProps)(Header);
