export interface ILike {
  active?: boolean;
  liked?: boolean;
}

export interface IAuthor {
  id: number,
  name: string,
  avatar: string
}

export interface IComment {
  id: number,
  created: string,
  text: string,
  author: number,
  parent?: number,
  likes: number,
  sub?: IComment[]
}

export interface ICommentsResponse {
  pagination: {
    page: number,
    size: number,
    total_pages: number
  },
  data: IComment[]
}
