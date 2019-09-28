import * as Joi from '@hapi/joi'

export default {
  create: Joi.object().keys({
    email: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required()
  })
}