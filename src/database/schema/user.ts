import { Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const user: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
}, { collection: 'user', timestamps: true })

user.plugin(mongoosePaginate)

export default user