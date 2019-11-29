
// Modules
import { all } from 'redux-saga/effects';

// Saga
import { cashbackSaga } from './cashback/saga';

function* rootSagas() {
    // here we initialize all the saga from different files
    yield all([
        ...cashbackSaga,
    ]);
}

export default rootSagas;