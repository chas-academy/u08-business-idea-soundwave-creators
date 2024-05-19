import { connect } from "mongoose";

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

export default connectDB();