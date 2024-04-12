/*
import { Schema, model, connect } from 'mongoose';
import dotenv from 'dotenv'
import { advert } from '~/server/models/advert';
// 1. Create an interface representing a document in MongoDB.
interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

// 3. Create a Model.
// const User  = model<IUser>('User', userSchema);


export async function test(){

    const ad1 = new advert({
        name: 'Casa',
        description: 'Casa 4 ambientes',
        photos: [{
          order: 2,
          url : "sdasda"
        }],
        size: "560m2",
        askingPrice: 2000000
      });
        
    await ad1.save();

    console.log(ad1.name)
}

await getRouterParam(event,id)


export default defineEventHandler(async (event) => {
  await sendRedirect(event, '/path/redirect/to', 302)
})

*/
