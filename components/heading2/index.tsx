import React from 'react';
import { Wrapper } from "./style.js";
import { IHeading } from './interfaces.js';

export default class Heading extends React.Component<IHeading> {
  constructor(props: any) {
    super(props);
  }
  render(): JSX.Element {
    const { text } = this.props;
    return (<Wrapper>{text}</Wrapper>)
  }
}
