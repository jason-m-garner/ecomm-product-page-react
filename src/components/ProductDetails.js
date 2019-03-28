import React from 'react'
import styled from 'styled-components';
import { lighten } from 'polished';
import Button from './Button';

const ProductDetailsWrapper = styled.div`
  grid-area: productdetails;
`;

const Brand = styled.span`
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Mpn = styled.span`
  color: ${lighten(0.2, "#333")};
  font-size: 1.2rem;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: normal;
`;

const Price = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const ProductDetails = ({
  brand,
  mpn,
  title,
  price,
  handleOnButtonClick
}) => {
  return (
    <ProductDetailsWrapper>
    <div>
      <Brand>{brand}</Brand>
      <Mpn> | {mpn}</Mpn>
    </div>
    <Title>{title}</Title>
    <Price>${price}</Price>
    <Button onClick={handleOnButtonClick}>
      Add To Cart
    </Button>
  </ProductDetailsWrapper>
  )
}

export default ProductDetails
