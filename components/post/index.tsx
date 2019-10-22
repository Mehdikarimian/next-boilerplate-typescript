import React from 'react';
import { Wrapper } from "./style";
import { IPostComponent } from './interfaces.js';

export default class Post extends React.Component<IPostComponent.IProps> {
  constructor(props: any) {
    super(props);
  }
  render(): JSX.Element {
    const { userId, title, body } = this.props;
    return (<Wrapper>
      <div className="post">
        <h2>{title}</h2>
        <h6>UserId {userId}</h6>
        <p>{body}</p>
      </div>
    </Wrapper>)
  }
}

