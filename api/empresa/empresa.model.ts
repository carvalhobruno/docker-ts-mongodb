import {Document, Schema, model} from 'mongoose'

interface INomeParaValorMap {
    [key: string]: any;
}

// export const PayablePaymentMethodsMap: INameToValueMap = Object.freeze({
//   debit_card: 'debit_card',
//   credit_card: 'credit_card'
// })

export interface IEmpresa extends Document {
  nome: string,
  email: string,
  cnpj: number,
  dataDeCriacao: Date
  socios: Array<{
    nome: number;
    cpf: string;
    dataDeNascimento: Date;
  }>,
  status: string,
  capital: number
}

const EmpresaSchema: Schema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cnpj: { type: Number, required: true },
  dataDeCriacao: { type: Date, required: true },
  socios: { type: Array, required: false },
  card: { type: Map, required: true },
  status: { type: String, required: true },
  capital: { type: Number, required: true }
})

export const Empresa = model<IEmpresa>('Empresa', EmpresaSchema)
