import { Schema, Types, Model } from "mongoose";

export interface Iphotos{
    order: Number,
    url: string
}

export const photosSchema = new Schema<Iphotos>({
    order: Number,
    url: {type: String}
})

