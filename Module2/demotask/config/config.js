import dotenv from 'dotenv';

dotenv.config();

export const config = () => (({
  appConfig: {
    port: process.env.PORT,
  },
  dbConfig: {
    url: process.env.MONGO_URL
  }
}));