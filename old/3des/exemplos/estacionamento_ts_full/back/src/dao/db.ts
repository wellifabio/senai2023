import env from "dotenv";
import mongoose from "mongoose";

const MONGO_URL = env.config().parsed?.MONGO_URL || 'mongodb://localhost:27017/estacionamento';

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});