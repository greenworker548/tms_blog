export interface IPost {
    id: number,
    image?: string,
    title?: string,
    date?: string,
    author?: number,
    text?: string,
}

export interface IPostsStore {
    posts: IPost[],
    favorites: number[],
}

export interface ISettingsStore {
    activeTab: string,
}

export interface IStore {
    posts: IPostsStore,
    settings: ISettingsStore,
}