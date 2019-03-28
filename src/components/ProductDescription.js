import React from "react";
import styled from "styled-components";

const Bullets = styled.div`
  grid-area: bullets;
`;

const Description = styled.div`
  grid-area: description;
  p {
    white-space: pre-wrap;
  }
`;

const List = styled.ul`
  padding: 0 0 0 1.9rem;
`;

const ProductDescription = ({bullets, description}) => {
  return (
    <React.Fragment>
      <Bullets>
        <h3>Hightlights</h3>
        <List>
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </List>
      </Bullets>
      <Description>
        <h3>Description</h3>
        <p>{description}</p>
      </Description>
    </React.Fragment>
  );
};

export default ProductDescription;
