/*import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI: string = "mongodb+srv://admin:admin@u08.bd82isw.mongodb.net/";
    await connect(mongoURI);
    console.log("MongoDB Connected...");
  } catch (err:any) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB();*/

import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();
const connectDB = async () => {
  try {
    
    const mongoURI: string = process.env.MONGO_URI || '';
    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected...");
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred during MongoDB connection');
    }
    process.exit(1);
  }
};

export default connectDB;
