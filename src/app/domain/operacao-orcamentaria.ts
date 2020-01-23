import { PlanoInterno } from './plano-interno';
import { Elemento } from './elemento';

export class OperacaoOrcamentaria {
    id: number;
    tipo: string;
    oficioTse: string;
    documentoSiaf: string;
    eventoSei: string;
    registroSiafEm: Date;
    observacao: string;
    elemento: Elemento;
    planoInterno: PlanoInterno;
}