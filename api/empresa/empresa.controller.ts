import { Empresa, IEmpresa } from './empresa.model'
import { apiMethod, getIp } from '../helpers';

export const create = apiMethod<any>(async (req: any) => {
  let payable = {
    ...req.body
  }

  const created = await Empresa.create(payable)
  return {data: {
    created
  }}
})

export const getAll = apiMethod<any>(async (req: any) => {
  const empresas = await Empresa.find({});

  return {data: {
    empresas
  }}
})