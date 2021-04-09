import { FETCH_RESTAURANTS, NEW_RESTAURANT } from './types';

export const fetchRestaurants = () => dispatch => {
    fetch("http://localhost:8080/restaurants")
        .then(res => res.json())
        .then(restaurants => dispatch({
            type: FETCH_RESTAURANTS,
            payload: restaurants
        }));
}

export const createRestaurant = (restaurantData) => dispatch => {
    fetch('http://localhost:8080/add/restaurant', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(restaurantData)
    })
        .then(res => res.json())
        .then(restaurant => dispatch({
            type: NEW_RESTAURANT,
            payload: restaurant
        }))
}