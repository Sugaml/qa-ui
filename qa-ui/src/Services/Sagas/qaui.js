import { put, call, takeLatest } from 'redux-saga/effects';
import { LOGIN_DATA, LOGIN_DATA_SUCCESS } from '../Constants/account';
import { postRequest } from '../api/login';

export function* loginResponse(payload) {
    console.log("checking saga :: ",payload.payload)
    try {
        const response = yield call(postRequest,payload.payload,"/user/login");
        console.log("Response :: ",response)
        if (response){
            yield put({type:LOGIN_DATA_SUCCESS, payload:response.data})
        }
    } catch (error) {
        console.log("login error: ",error)
    }
}

export default function* watchImagesLoad() {
    yield takeLatest(LOGIN_DATA, loginResponse);
}
