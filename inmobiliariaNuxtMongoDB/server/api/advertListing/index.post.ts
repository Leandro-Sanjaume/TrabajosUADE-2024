import { useFetch } from "nuxt/app";
import advert from "../../models/advert";


export default defineEventHandler(async (event) =>{
    try{
        const body = await readBody(event);
        let idList = [];

        for (let key in body) {
            console.log(body)
            let element = body[key]
            console.log(element)
            const newAdvert = new advert({
                id : Math.floor(Math.random() * (Math.floor(4096) - Math.ceil(1)) +  Math.ceil(1)),
                type: element.type,
                description: element.description,
                photos: element.photos,
                size: element.size,
                askingPrice: element.askingPrice,
                location: element.location
            })
            idList.push(newAdvert.id);
            newAdvert.save();
        }

        return {"ids" : idList, "List": body}
    }catch(error) {
        return error
    }   
})
