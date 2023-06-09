import { all } from 'redux-saga/effects';

import qaui from './qaui';

export default function* rootSaga() {
    yield all([qaui()]);
}
