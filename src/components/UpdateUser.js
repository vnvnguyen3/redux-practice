import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser } from '../actions/userActions';

class UpdateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const updatedUser = {
            id: this.props.user.user.id,
            userName: this.props.user.user.userName,
            password: this.props.user.user.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            role: this.props.user.user.role
        }
        this.props.updateUser(updatedUser);
    }

    render() {
        return (
            <div>
                <h2>Update user info</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="firstName">First name: </label> <br />
                        <input type="text" name="firstName" onChange={this.onChange} 
                            value={this.state.firstName} />
                    </div>
                    <br />
                    <div>
                        <label for="lastName">Last name: </label> <br />
                        <input type="text" name="lastName" onChange={this.onChange} 
                            value={this.state.lastName} />
                    </div>
                    <br />
                    <div>
                        <label for="email">Description: </label> <br />
                        <input type="text" name="email" onChange={this.onChange} 
                            value={this.state.email} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

UpdateUser.propTypes= {
    updateUser: PropTypes.func.isRequired,
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.users.profile
})

export default connect(mapStateToProps, {updateUser})(UpdateUser);