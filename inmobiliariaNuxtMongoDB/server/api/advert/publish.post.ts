import advert from "../../models/advert";


export default defineEventHandler(async (event) =>{
    try{

        const body = await readBody(event);

        const newAdvert = new advert({
            id : Math.floor(Math.random() * (Math.floor(4096) - Math.ceil(1)) +  Math.ceil(1)),
            type: body.type,
            description: body.description,
            photos: body.photos,
            size: body.size,
            askingPrice: body.askingPrice,
            location : body.location
        })
        newAdvert.save()

        return {body}
        
    }catch(error) {
        return error
    }   
})