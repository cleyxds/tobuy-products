import React, { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Container, User, Products, Product, Button } from './styles';

import api from '../../services/api';

export const Application = () => {

  const [user,setUser] = useState([{}]);
  const [products, setProducts] = useState([]);

  async function handleDeleteProduct(id) {
    try {
      await api.delete(`/products/${id}`)

      setProducts(products.filter(product => product.id !== id))
    } catch (error) {
      alert('Cannot delete, try again');
    }
  }

  useEffect(() => {
    api.get('/user/2')
      .then(user => setUser(user.data));

    api.get('/products/2')
      .then(product => setProducts(product.data))

  }, []);

  return (
    <Container>
      <Header />
      <User>{`Logged as ${user.email}`}</User>
      
      <Products>
        {products.map(product => (
          <Product key={product.id}>
            <strong>{product.title}</strong>
            <span>{product.price}</span>
            <Button onClick={() => handleDeleteProduct}>DELETE</Button>
          </Product>
        ))}
      </Products>
    </Container>
  )
}