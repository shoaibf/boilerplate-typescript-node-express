import Controller from './../controllers'
import { Router } from 'express'

const router: Router = Router()
router.get('/users', Controller.User.FetchUser)
router.post('/user', Controller.User.CreateUser)

const User: Router = router

export default User