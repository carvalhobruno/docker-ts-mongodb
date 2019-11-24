import * as controller from './empresa.controller'
import { Router } from 'express'

const router = Router()

router.post('/', controller.create)
router.get('/', controller.getAll)

export default router
