import mongoose from "mongoose";

let connected = false;

const connectDb = async () => {
  mongoose.set("strictQuery", true);
  // if the connection is already established, return
  if (connected) {
    console.log("MongoDB is connected");
    return;
  }
  try {
    // connect to the database
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

export default connectDb;
