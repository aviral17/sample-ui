import mongoose from "mongoose";

const url = process.env.MONGODB_URI as string;

let connection: typeof mongoose;

const startDb = async () => {
  if (!connection) connection = await mongoose.connect(url); // preventing multiple db creation
  return connection;
};

export default startDb;
