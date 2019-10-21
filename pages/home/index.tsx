import React from 'react';
import Heading from '../../components/heading';
import { Wrapper } from './style';
import Layout from '../../layouts/Main';

export default class Home extends React.Component {
  static Layout = Layout;
  constructor(props: any) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <Wrapper className="homePage">
        <Heading text="Hello world!" />
      </Wrapper>
    )
  }
}

