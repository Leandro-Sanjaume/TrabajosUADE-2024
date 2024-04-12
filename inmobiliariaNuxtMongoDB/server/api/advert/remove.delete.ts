import advert from "../../models/advert";

export default defineEventHandler(async (event) =>{
    const query = await getQuery(event)
    try{
        const result = await advert.deleteOne({id : query.advID})
        return {"feedback": 'Delete operation successfully done' ,"result" : result}
    }catch(error) {
        return error
    }
})

