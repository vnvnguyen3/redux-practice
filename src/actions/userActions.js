import { FETCH_USERS, LOGIN, LOGOUT, UPDATE_USER } from './types';

export const fetchUsers = () => dispatch => {
    fetch("http://localhost:8080/users")
        .then(res => res.json())
        .then(users => dispatch({
            type: FETCH_USERS,
            payload: users
        }));
};

export const updateUser = (user) => dispatch => {
    fetch(`http://localhost:8080/update/user/${user.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(user => dispatch({
            type: UPDATE_USER,
            payload: user
        }))
}

export const login = (user) => ({ type: LOGIN, payload: {user} });

export const logout = () => ({ type: LOGOUT, payload: {user: {userName: ""} } });