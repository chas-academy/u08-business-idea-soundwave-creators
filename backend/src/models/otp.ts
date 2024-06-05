// backend/src/models/otp.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IOTP extends Document {
  email: string;
  code: string;
  createdAt: Date;
}

const otpSchema: Schema = new Schema({
  email: { type: String, required: true },
  code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: '10m' }, // OTP expires in 10 minutes
});

const OTP = mongoose.model<IOTP>('Otp', otpSchema);

export default OTP;
