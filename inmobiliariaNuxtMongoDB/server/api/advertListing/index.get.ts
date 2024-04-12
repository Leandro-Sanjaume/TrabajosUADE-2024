import advert from "../../models/advert";

export default defineEventHandler(async () =>{
    try{
        const result = await advert.find()
        return result
    }catch(error) {
        return error
    }
})