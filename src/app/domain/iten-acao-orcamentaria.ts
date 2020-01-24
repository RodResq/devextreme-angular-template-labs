import { OrcamentoAutorizado } from './orcamento-autorizado';
import { Unidade } from './unidade';
import { AcaoOrcamentaria } from './acao-orcamentaria';
export class ItenAcaoOrcamentaria {
    id?: number;
    orcamentoAutorizado?: OrcamentoAutorizado;
    unidade?: Unidade;
    acaoOrcamentaria?: AcaoOrcamentaria;
}