import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  //Just use fetch itself can infinite call based on the react refreshing characteristic. 
  // fetch('data/products.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log('🔥Data Recieves from Network');
  //     setProducts(data);
  //   });

  useEffect(() => {
    fetch('data/products.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥Data Recieves from Network');
        setProducts(data);
      });
    return () => { //when component unmount, execute
      console.log('🧹 Cleaning Data');
    };
  }, []);

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
