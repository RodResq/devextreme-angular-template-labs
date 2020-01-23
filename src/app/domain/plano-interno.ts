import { GrupoDespesa } from './grupo-despesa';
import { DespesaAgregada } from './despesa-agregada';
import { Ptrs } from './ptrs';
import { AcaoOrcamentaria } from './acao-orcamentaria';
export class PlanoInterno {
    id: number;
    nome: string;
    depesaAgregada: DespesaAgregada;
    grupoDespesa: GrupoDespesa;
    ptrs: Ptrs;
    acaoOrcamentaria: AcaoOrcamentaria;
}