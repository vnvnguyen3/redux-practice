import { FETCH_USERS, LOGIN, LOGOUT } from './types';

export const fetchUsers = () => dispatch => {
    fetch("http://localhost:8080/users")
        .then(res => res.json())
        .then(users => dispatch({
            type: FETCH_USERS,
            payload: users
        }));
};

export const login = (user) => ({ type: LOGIN, payload: {user} });

export const logout = () => ({ type: LOGOUT, payload: {user: {userName: ""} } });