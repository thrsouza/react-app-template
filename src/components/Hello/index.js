import React from 'react';

import { Container } from './styles';

export default function Hello() {
  return (
    <Container>
      <h1>Hello, ReactJS!</h1>
      <small>
        <b>Template: </b>
        <a href="https://github.com/thiagodesouza/react-app-template" target="__blank">
          @thiagodesouza/react-app-template
        </a>
      </small>
    </Container>
  );
}
