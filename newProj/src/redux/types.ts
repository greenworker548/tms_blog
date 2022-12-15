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
    searchValue: string,
}

export interface ISettingsStore {
    activeTab: string,
    currentPage: number,
    rowsPerPage: number,
}

export interface IUserStore {
    user: IUser
}

export interface IStore {
    posts: IPostsStore,
    settings: ISettingsStore,
    users: IUserStore,
}

export interface IUser {
    id?: number,
    email: string,
    username?: string,
    password: string
  }

 export interface JwtResponse {
    access: string,
    refresh: string
  }