import hosts  from "../index";
import { setQuery } from "../../shared/utils/setQuery.util";

export default new class historyMethods {

    async newHistory(history: History) {
        return await hosts.$historyHost.post('', history)
    }

    async getByAuctionId(auctionId: string) {
        const query = setQuery('auctionId', auctionId)
        return await hosts.$historyHost.get(query)
    }

}