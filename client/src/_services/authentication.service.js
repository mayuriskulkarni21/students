// import config from 'config';
import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../_helpers/handle-response';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject,
    get currentUserValue() { return currentUserSubject && currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://localhost:5000/api/users`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('currentUser', JSON.stringify(user[0].username));
            currentUserSubject.next(user);
            return user;
        });
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}