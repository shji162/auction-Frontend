import hosts  from "../index";
import type { Media } from "../../shared/types/media.type";
import type { updateMedia } from "../../shared/types/update/media-update";
import { setQuery } from "../../shared/utils/setQuery.util";

export default new class mediaMethods {

    async create(media: Media) {
        return await hosts.$mediaHost.post('', media)
    }

    async getByAuctionId(auctionId: string){
        const query = setQuery('auctionId', auctionId)
        return await hosts.$mediaHost.get(query)
    }

    async getById(id: string){
        return await hosts.$mediaHost.get(id)
    }

    async update(id: string, media: updateMedia){
        return await hosts.$mediaHost.patch(id, media)
    }

    async delete(id: string){
        return await hosts.$mediaHost.delete(id)
    }
}