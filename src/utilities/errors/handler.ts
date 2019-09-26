import { Application, Request, Response, NextFunction } from 'express'

export default (app: Application) => {
  app.use( (req, res, next) => {
		interface BetterError extends Error {
			status?: number;
		}

		const err: BetterError = new Error('Not Found')
		err.status = 404
		next(err)
	})
  
  app.use( (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack)
		res.status(err.status || 500)

		res.json({errors: {
			message: err.message,
			error: {}
		}})
	})
}