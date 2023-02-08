import { Schema as mongoose } from 'mongoose'

const FilingSchema = new mongoose.Schema({
  type: {
    type: String,
    ref: 'FilingTypes'
  },
  description: {
    type: String,
    maxLength: 128
  },
  dateFiled: {
    type: Date,
    default: '01/01/1970'
  },
  dateDue: {
    type: Date,
    default: '01/01/1970'
  },
  dateCompleted: {
    type: Date,
    default: '01/01/1970'
  },
  dateClosed: {
    type: Date,
    default: '01/01/1970'
  },
  status: {
    type: String
  },
  generalNotes: {
    type: String,
    maxLength: 128
  },
  createdBy: {
    ref: 'User',
    type: mongoose.Types.ObjectId
  },
  updatedBy: {
    ref: 'User',
    type: mongoose.Types.ObjectId
  },
  client: {
    ref: 'Client',
    type: mongoose.Types.ObjectId
  },
  case: {
    ref: 'Case',
    type: mongoose.Types.ObjectId
  }
})
export default mongoose.model('filing', FilingSchema)
