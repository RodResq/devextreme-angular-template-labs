import { Ptrs } from './ptrs';
import { GrupoDespesa } from './grupo-despesa';
export class DespesaAgregada {
  id?: number;
  codigo?: string;
  nome?: string;
  descricao?: string;
  grupoDespesa?: GrupoDespesa;
  ptrs?: Ptrs;
}
