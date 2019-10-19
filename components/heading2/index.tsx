import React from 'react';
import { Wrapper } from "./style.js";
import { IHeadingComponent } from './interfaces.js';

export default class Heading extends React.Component<IHeadingComponent.IProps> {
  constructor(props: any) {
    super(props);
  }
  render(): JSX.Element {
    const { text } = this.props;
    return (<Wrapper>{text}</Wrapper>)
  }
}
