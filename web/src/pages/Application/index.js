import React, { useEffect, useState } from 'react';

import api from '../../services/api';

export const Application = () => {

  const [user,setUser] = useState([{}]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/user/1')
      .then(user => setUser(user.data));

    api.get('/products/1')
      .then(product => setProducts(product.data))
    
  }, []);

  return (
    <div>
      <p className="user">
        <span>
          {user.email}
        </span>
      </p>
    <div>
      <p className="userProducts">
        <span>
          {products.title}
        </span>
      </p>
    </div>
    </div>
  )
}