import { Schema, model } from 'mongoose'

const ClientSchema = new Schema(
  {
    firstName: {
      type: String,
      upperCase: true,
      unique: true
    },
    middleName: {
      type: String,
      upperCase: true
    },
    lastName: {
      type: Number
    },
    accountStanding: {
      type: String
    },
    maritalStatus: {
      type: String
    },
    description: {
      type: String,
      maxLength: 128
    },
    dateOfBirth: {
      type: Date,
      default: '01/01/1970'
    },
    generalNotes: {
      type: String,
      maxLength: 128
    },
    createdBy: {
      ref: 'User',
      type: Schema.Types.ObjectId
    },
    updatedBy: {
      ref: 'User',
      type: Schema.Types.ObjectId
    },
    photograph: {
      type: String
    },
    filings: {
      type: Array,
      ref: 'Filing'
    },
    addresses: {
      type: Array,
      ref: 'Address'
    },
    phoneNumbers: {
      type: Array,
      ref: 'PhoneNumber'
    },
    emails: {
      type: Array,
      ref: 'Email'
    },
    interactionsLog: {
      type: Array,
      ref: 'clientInteractions'
    }
  },
  {
    timestamps: true,
    strict: false
  }
)

ClientSchema.findAll = function (callback) {
  return this.model('client').find({}, callback)
}

const Tool = model('tool', ClientSchema)

export default Tool
