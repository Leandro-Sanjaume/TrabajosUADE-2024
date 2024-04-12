import { Schema, Types, model } from "mongoose";
import {type Iphotos, photosSchema} from "~/server/models/photos"


interface Iadvert {
    id: Number,
    type: string,
    description: string,
    photos: Array<Iphotos>,
    size: string,
    askingPrice: Number,
    location: string
    
}

const advertSchema = new Schema<Iadvert>({
    id: Number,
    type: { type: String},
    description: { type: String},
    photos: [photosSchema],
    size: { type: String},
    askingPrice: Number,
    location: { type: String}
})

const advert = model<Iadvert>('advert', advertSchema);

export default advert;