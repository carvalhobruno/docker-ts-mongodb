import { Empresa, IEmpresa } from './empresa.model'
import { apiMethod, getIp } from '../helpers';

export const criar = apiMethod<any>(async (req: any) => {
  const empresa = {
    ...req.body,
    dataDeCriacao: new Date(),
    status: 'Criada',
  }

  const criada = await Empresa.create(empresa)
  return { data: {
    criada
  }}
})

export const listar = apiMethod<any>(async (req: any) => {
  const empresas = await Empresa.find({});

  return { data: {
    empresas
  }}
})
