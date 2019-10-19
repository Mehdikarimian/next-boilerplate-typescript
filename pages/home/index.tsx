import React from 'react';
import Heading from '../../components/heading';
import Heading2 from '../../components/heading2';
import { Wrapper } from './style';
import Layout from '../../layouts/NoneLayout';

export default class Home extends React.Component {
  static Layout = Layout;
  constructor(props: any) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <Wrapper>
        <Heading text="Hello From Home" />
        <Heading2 text="Hello 2" />
      </Wrapper>
    )
  }
}

