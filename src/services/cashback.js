// Api
import { Api } from 'utils/api';

class CashbackService {
    static CashbackByCPF(cpf) {
        return Api.get(`/cashback?cpf=${cpf}`)
    }
}

export default CashbackService;