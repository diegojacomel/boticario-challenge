/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

// Services
import { CashbackService } from 'services';

/* Types */
import {
    GET_CASHBACK_TOTAL
} from './types';

function* sendRegister(action) {
    try {
        const response = yield call(CashbackService.CashbackByCPF, action.cpf);

        if (response.status === 200) {
            yield put({ type: GET_CASHBACK_TOTAL.SUCCESS, response: response });
        }
    } catch(e) {
        yield put({ type: GET_CASHBACK_TOTAL.FAILURE, response: e.response });
    }
}

export const cashbackSaga = [
    takeEvery(GET_CASHBACK_TOTAL.REQUEST, sendRegister),
];