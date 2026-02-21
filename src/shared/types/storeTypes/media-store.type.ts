import type { Media } from "../media.type"



export type mediaStoreType = {
    media: Media[] | null,
    setMedia: (media: Media[]) => void
    addMedia: (media: Media) => void
    deleteMedia: (id: string) => void
}