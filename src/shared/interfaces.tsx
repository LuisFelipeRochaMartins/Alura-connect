export type PostProps = {
  id: number
  cover: string
  title: string
  slug: string
  body: string
  markdown: string 
  author: AuthorProps
}

export type AuthorProps = {
  id: number 
  name: string
  username: string
  avatar: string
}
