import advert from "../../models/advert";

export default defineEventHandler(async (event) =>{
    const query = await getQuery(event)
    try{
        const result = await advert.find({id : query.advID})
        if(result.length > 0){
            console.log(result)
            let firsRes = result[0]
            return firsRes
        }else{
            let resEr = "Advert with ID " + query.advID + " not found"
            throw createError({
                statusCode: 400,
                statusMessage: resEr,
              })
        }
    }catch(error) {
        return error
    }
})