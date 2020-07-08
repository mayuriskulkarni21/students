import { constants } from '../../constants/index.js';

let initialState = {
    addStudent: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_ADD_STUDENT:
            return {
                addStudent: [...state.addStudent, action.data]
            }
        default:
            return state
    }
}