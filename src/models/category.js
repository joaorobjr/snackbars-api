import mongoose from 'mongoose';

const schema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { toJSON: { virtuals: true } }
);

const model = mongoose.model('categories', schema);

export default model;
