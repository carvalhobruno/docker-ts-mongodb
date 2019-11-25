import { Empresa, IEmpresa } from './empresa.model'
import { apiMethod, getIp } from '../helpers';

export const create = apiMethod<any>(async (req: any) => {
  const empresa = {
    ...req.body
  }

  const created = await Empresa.create(empresa)
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
