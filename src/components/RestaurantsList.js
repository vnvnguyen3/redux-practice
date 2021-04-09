import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/restaurantActions';
import AddRestaurant from './AddRestaurant';

class RestaurantsList extends Component {
    componentDidMount(){
        this.props.fetchRestaurants();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.newRestaurant !== this.props.newRestaurant) {
            this.props.restaurants.push(this.props.newRestaurant);
            console.log(this.props.restaurants);
        }
    }
    
    render() {
        const restaurantItems = this.props.restaurants.map(restaurant => (
            <div key={restaurant.id}>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.address}</p>
                <p>{restaurant.description}</p>
            </div>
        ));
        return (
            <div>
                <h1>Restaurants</h1>
                {restaurantItems}
                <AddRestaurant />
            </div>
        )
    }
}

RestaurantsList.propTypes = {
    fetchRestaurants: PropTypes.func.isRequired,
    restaurants: PropTypes.array.isRequired,
    newRestaurant: PropTypes.object
}

const mapStateToProps = state => ({
    restaurants: state.restaurants.items,
    newRestaurant: state.restaurants.item
})

export default connect(mapStateToProps, {fetchRestaurants})(RestaurantsList);