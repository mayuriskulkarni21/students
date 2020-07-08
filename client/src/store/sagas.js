import { call, put, takeEvery } from 'redux-saga/effects';
import { constants } from '../constants/index.js';
import { getAddStudent } from './actions.js';
import { endpoints } from '../constants/endpoints.js';
import Axios from 'axios';
import '@babel/polyfill';

function* postAddStudent(action) {
    try {
        yield put(getAddStudent(action.data));
    } catch (e) {
        console.log("e", e);
        yield put(getForm(e));
    }
}

function* getFormList(action) {
    try {
        let result = yield Axios.get(endpoints.FORM_LIST)
            .then(res => {
                return res.data;
            })
            .catch(e => {
                return e;
            })
        yield put(formList(result));
    } catch (e) {
        console.log("e", e);
        yield put(formList(e));
    }
}

function* mySaga() {
    console.log("INTO SAGA")
    yield takeEvery(constants.ADD_STUDENT, postAddStudent);
    // yield takeEvery(constants.GET_FORM_LIST, getFormList);
}

export default mySaga;