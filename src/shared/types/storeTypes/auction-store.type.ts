import type { Auction } from "../auction.type"


export type auctionStoreType = {
    auctions: Auction[] | null,
    selectedAuction: Auction | null,
    search: string,
    setSearch: (search: string) => void
    setAuctions: (auctions: Auction[]) => void
    setSelectedAuction: (auction: Auction) => void
    addAuction: (auction: Auction) => void
    deleteAuction: (id: string) => void
}