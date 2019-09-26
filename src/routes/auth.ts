import Controller from './../controllers'
import { Router } from 'express'

const router: Router = Router()
router.post('/login', Controller.Auth.login)

const Auth: Router = router

export default Auth