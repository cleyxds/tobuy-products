import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Container, Form } from './styles';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={e => {alert(`Created with ${email}`);}}>
          <input 
            type="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />

          <input 
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit">
            Register
          </button>
          <hr />
          <Link to='/'>Sign In</Link>
        </Form>
      </Container>
    </>
  )
}