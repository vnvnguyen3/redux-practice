import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRestaurant } from '../actions/restaurantActions';

class AddRestaurant extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            address: '',
            description: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const restaurant = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description
        }

        this.props.createRestaurant(restaurant);
    }

    render() {
        return (
            <div>
                <h2>Add Restaurant</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="name">Name: </label> <br />
                        <input type="text" name="name" onChange={this.onChange} 
                            value={this.state.name} />
                    </div>
                    <br />
                    <div>
                        <label for="address">Address: </label> <br />
                        <input type="text" name="address" onChange={this.onChange} 
                            value={this.state.address} />
                    </div>
                    <br />
                    <div>
                        <label for="description">Description: </label> <br />
                        <textarea name="description" onChange={this.onChange} 
                            value={this.state.desctiption} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

AddRestaurant.propTypes = {
    createRestaurant: PropTypes.func.isRequired
}

export default connect(null, { createRestaurant })(AddRestaurant);