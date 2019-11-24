import * as controller from './payable.controller'
import { Router } from 'express'

const router = Router()

router.post('/', controller.create)
router.get('/', controller.getAll)

export default router
