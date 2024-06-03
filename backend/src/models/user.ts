import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  //googleId?: string;
  password: string;
  role: 'user' | 'admin';
  created_at: Date;
  updated_at: Date;
  resetToken?: string; // Add resetToken property
  playlist: string[]; // Array of song IDs
}

const userSchema: Schema = new Schema({
  _id: { type: mongoose.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  //googleId: { type: String, sparse: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user', enum: ['user', 'admin'] },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  resetToken: { type: String },
  playlist: [{ type: Schema.Types.ObjectId, ref: 'UserPlaylist' }], // Reference to Song model
});

const User = mongoose.model<IUser>('User', userSchema);


export default User;

 

//elow is js format
 // models/user.js
// // const mongoose = require('mongoose');

// // const userSchema = new mongoose.Schema({
// //   username: { type: String, required: true, unique: true },
// //   email: { type: String, required: true, unique: true },
// //   googleId: { type: String, required: true, unique: true },
// //   role: { type: String, default: 'user' }, // 'user' or 'admin'
// //   created_at: { type: Date, default: Date.now },
// //   updated_at: { type: Date, default: Date.now }
// // });

// // module.exports = mongoose.model('User', userSchema);

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   googleId: { type: String, required: true, unique: true },
//   password: { type: String },
//   role: { type: String, default: 'user' }, // 'user' or 'admin'
//   created_at: { type: Date, default: Date.now },
//   updated_at: { type: Date, default: Date.now }
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;