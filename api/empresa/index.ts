import * as controller from './empresa.controller'
import { Router } from 'express'

const router = Router()

router.post('/', controller.criar)
router.get('/', controller.listar)

export default router
