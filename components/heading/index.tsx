import React from 'react';
import { Wrapper } from "./style";
import { IHeadingComponent } from './interfaces.js';
import styled from 'styled-components';

export default class Heading extends React.Component<IHeadingComponent.IProps> {
  constructor(props: any) {
    super(props);
  }
  render(): JSX.Element {
    const { text } = this.props;
    return (<Wrapper><h2>{text}</h2></Wrapper>)
  }
}

