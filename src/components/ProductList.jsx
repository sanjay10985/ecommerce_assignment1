import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProductListDiv = styled.div`
//   background-color: black;
  width: 100%;
  height: 100vh;
  display:flex;
  flex-direction: column;
  padding: 3em;
`;

const ProductItemDiv = styled.div`
  background-color: blue;
  width: 100%;
  height: 20%;
  margin-top:1em;
  padding:2em;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      };
      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ProductListDiv>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ProductListDiv>
  );
};

const ProductItem = ({ product }) => {
  return <ProductItemDiv>{product.title}</ProductItemDiv>;
};

export default ProductList;
