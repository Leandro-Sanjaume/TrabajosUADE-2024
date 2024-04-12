import mongoose from 'mongoose';


export default async function initializeDB() {
  try{

    const config = useRuntimeConfig()
    mongoose.connect(config.mongoUrl, {
      serverSelectionTimeoutMS: 5000
    });
    mongoose.connection.on('connected', () => console.log('Connected to InmoDB!'));
  }catch(error) {
    console.log(error)
  }   
}


