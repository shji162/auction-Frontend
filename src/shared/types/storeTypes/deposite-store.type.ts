import type { Deposite } from "../deposite.type"



export type depositeStoreType = {
    deposites: Deposite[] | null,
    selectedDeposite: Deposite | null,
    search: string,
    setSearch: (search: string) => void
    setDeposites: (deposites: Deposite[]) => void
    setSelectedDeposite: (deposite: Deposite) => void
    addDeposite: (deposite: Deposite) => void
    deleteDeposite: (id: string) => void
}