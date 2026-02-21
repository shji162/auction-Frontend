import type { History } from "../history.type"



export type historyStoreType = {
    history: History[] | null,
    setHistory: (history: History[]) => void
}