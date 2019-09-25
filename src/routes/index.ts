import { Router, Request, Response, NextFunction } from 'express'

const router: Router = Router()

router.get('/users', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({
      message: 'fetch users',
      data: []
    })
  } catch (error) {
    next(error)
  }
})

export const Routes: Router = router