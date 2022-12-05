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
    countTotal: number,
}

export interface ISettingsStore {
    activeTab: string,
    currentPage: number,
    rowsPerPage: number,
}

export interface IStore {
    posts: IPostsStore,
    settings: ISettingsStore,
}