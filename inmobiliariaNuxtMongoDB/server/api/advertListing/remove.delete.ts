import advert from "../../models/advert";

export default defineEventHandler(async () =>{
    try{
        const result = await advert.deleteMany()
        return {"feedback": 'Delete operation successfully done' ,"result" : result}
    }catch(error) {
        return error
    }
})