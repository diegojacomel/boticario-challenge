/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

// Services
import { CashbackService } from 'services';

/* Types */
import {
    SEND_REGISTER
} from './types';

function* sendRegister(action) {
    try {
        const response = yield call(CashbackService.CashbackByCPF, action.cpf);

        if (response.status === 200) {
            yield put({ type: SEND_REGISTER.SUCCESS, response: response });
        }
    } catch(e) {
        yield put({ type: SEND_REGISTER.FAILURE, response: e.response });
    }
}

export const cashbackSaga = [
    takeEvery(SEND_REGISTER.REQUEST, sendRegister),
];