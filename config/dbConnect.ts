import mongoose from "mongoose";

if (!process.env.MONGO_DB_URI) throw new Error("Cannot reach the db uri");
export const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URI || "").then((conn) => {
      console.log("Connecting to db", conn.connection.host);
    });
  } catch (error) {
    throw new Error("could not connect with db");
  }
};
