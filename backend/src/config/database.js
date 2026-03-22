import mongoose from "mongoose";

class Database {
  static instance;

  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    Database.instance = this;
  }

  async connect() {
    if (this.connection) return this.connection;

    this.connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo conectado 🔥");
    return this.connection;
  }
}

const db = new Database();

export default async function connectDB() {
  await db.connect();
}