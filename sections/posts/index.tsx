import React from 'react';
import { Wrapper } from "./style";
import { IPostsSection } from './interfaces';
import Post from '../../components/post';

export default class Posts extends React.Component<IPostsSection.IProps> {
  constructor(props: any) {
    super(props);
  }
  render(): JSX.Element {
    const { posts } = this.props;
    return (<Wrapper>
      <div className="posts">
        {posts.map(post => <Post key={post.id} title={post.title} body={post.body} userId={post.userId} id={post.id} />)}
      </div>
    </Wrapper>)
  }
}

