import { Payable, IPayable, PayablePaymentMethodsMap, PayableStatusMap, PayableFeesMap } from './payable.model'
import { apiMethod, getIp } from '../helpers';

export const create = apiMethod<any>(async (req: any) => {
  let payable = {
    ...req.body
  }

  payable = changePayableByPaymentMethod(payable)

    const created = await Payable.create(payable)
    return {data: {
      created
    }}
})


export const getAll = apiMethod<any>(async (req: any) => {

  const payables = await Payable.find({});


  return {data: {
    paid: payables.filter((payable:IPayable) => payable.status == PayableStatusMap.paid),
    waiting_funds: payables.filter((payable:IPayable) => payable.status == PayableStatusMap.waiting_funds)
  }}
})


const changePayableByPaymentMethod = function(payable: IPayable) {
  if (!payable) {
    return payable
  }

  const obj = { ...payable }

  if (obj.payment_method === PayablePaymentMethodsMap.debit_card) {
    obj.status = PayableStatusMap.paid
    obj.payment_date =  new Date()
  }

  if (obj.payment_method === PayablePaymentMethodsMap.credit_card) {
    const date = new Date()
    date.setDate(date.getDate() + 30)
    obj.status = PayableStatusMap.waiting_funds
    obj.payment_date = date
  }

  obj.transaction_fee = PayableFeesMap[obj.payment_method];

  obj.value = obj.value - (obj.value * obj.transaction_fee);

  console.log(obj)

  return obj;
}
