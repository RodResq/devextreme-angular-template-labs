import { Ptrs } from './ptrs';
import { DespesaAgregada } from './despesa-agregada';
import { ItenAcaoOrcamentaria } from './iten-acao-orcamentaria';

export class ItenDespesaAgregada {
    id?: number;
    despesaAgregada?: DespesaAgregada;
    itemAcaoOrcamentaria?: ItenAcaoOrcamentaria;
}