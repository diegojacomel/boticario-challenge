// Types
import {
    GET_CASHBACK_TOTAL
} from './types';

const INITIAL_STATE = {
    login: {
        email: null,
        password: null
    },
    register: {
        name: null,
        CPF: null,
        email: null,
        password: null
    }
}

const cashbackReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CASHBACK_TOTAL.REQUEST:
            return {
                ...state,
            }

        case GET_CASHBACK_TOTAL.SUCCESS:
            return {
                ...state,
                action: action.response
            }

        case GET_CASHBACK_TOTAL.FAILURE:
            return {
                ...state,
                action: action.response
            }

        case GET_CASHBACK_TOTAL.RESET:
            return {
                ...state,
            }

        default:
            return state

    }
}

export default cashbackReducer;

