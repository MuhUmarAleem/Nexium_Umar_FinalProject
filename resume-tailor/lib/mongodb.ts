import { MongoClient } from 'mongodb';

let client: MongoClient;

export async function connectDB() {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
  }
  return client.db('blogs'); // ✅ explicitly select your DB here
}
