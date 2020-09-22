import React from 'react';

import { Container, Img } from './styles';
import logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <Container>
      <Img src={logo} alt='React' />
    </Container>
  )
}