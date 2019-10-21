import React from 'react';
import { Container } from './style';

export default class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <Container className="container">
        {this.props.children}
      </Container>
    )
  }
}

