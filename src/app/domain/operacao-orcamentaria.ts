import { PlanoInterno } from './plano-interno';
import { Elemento } from './elemento';
import { ItemPlanoInterno } from './item-plano-interno';

export class OperacaoOrcamentaria {
    id?: number;
    tipo?: string;
    oficioTse?: string;
    documentoSiaf?: string;
    eventoSei?: string;
    registroSiafEm?: Date;
    observacao?: string;
    elemento?: Elemento;
    itemPlanoInterno?: ItemPlanoInterno;
}