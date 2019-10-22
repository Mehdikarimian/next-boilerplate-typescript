
export namespace IPostsSection {
  export type Post = {
    userId: string;
    id: number;
    title: string;
    body: string;
  }
  export interface IProps {
    posts: Array<Post>;
  }
}