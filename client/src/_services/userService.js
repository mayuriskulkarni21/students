import { authHeader } from '../_helpers/auth-header';
import { handleResponse } from '../_helpers/handle-response';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'POST', headers: authHeader() };
    return fetch(`http://localhost:5000/api/users`, requestOptions).then(handleResponse);
}