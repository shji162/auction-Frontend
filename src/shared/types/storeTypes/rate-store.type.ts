import type { Rate } from "../rate.type"



export type rateStoreType = {
    rates: Rate[] | null,
    setRates: (rates: Rate[]) => void
    addRate: (rate: Rate) => void
}