// Types
import {
    SEND_REGISTER
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
        case SEND_REGISTER.REQUEST:
            return {
                ...state,
            }

        case SEND_REGISTER.SUCCESS:
            return {
                ...state,
                action: action.response
            }

        case SEND_REGISTER.FAILURE:
            return {
                ...state,
                action: action.response
            }

        case SEND_REGISTER.RESET:
            return {
                ...state,
            }

        default:
            return state

    }
}

export default cashbackReducer;

