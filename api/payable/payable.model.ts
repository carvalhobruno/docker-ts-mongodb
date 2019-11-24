import * as mongoose from 'mongoose'
interface INameToValueMap {
    [key: string]: any;
}

export const PayablePaymentMethodsMap: INameToValueMap = Object.freeze({
  debit_card: 'debit_card',
  credit_card: 'credit_card'
})

export const PayableStatusMap: INameToValueMap = Object.freeze({
  paid: 'paid',
  waiting_funds: 'waiting_funds'
})

export const PayableFeesMap: INameToValueMap = Object.freeze({
  debit_card: 0.03,
  credit_card: 0.05
})

export interface IPayable extends mongoose.Document {
  value: number,
  description: string,
  payment_method: string
  card: {
    number: number;
    owner: string;
    expire_date: Date;
    cvv: number;
  },
  status: string,
  payment_date: Date,
  transaction_fee: number
}

const PayableSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  description: { type: String, required: true },
  payment_method: { type: String, required: true },
  card: { type: Map, required: true },
  status: { type: String, required: true },
  payment_date: { type: Date, required: true },
  transaction_fee: { type: Number, required: true }
})

export const Payable = mongoose.model<IPayable>('Payable', PayableSchema)
