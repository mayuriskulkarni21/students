import { constants } from '../constants/index.js';

export const addStudent = (data) => ({
    type: constants.ADD_STUDENT,
    data
});

export const getAddStudent = (data) => ({
    type: constants.GET_ADD_STUDENT,
    data
});
