import React from "react";
import styled from "styled-components";
import { size, lighten } from "polished";

const GalleryWrapper = styled.div`
  grid-area: gallery;
`;

const MainImage = styled.div`
  box-sizing: border-box;
  height: auto;
  margin: 0 auto 2.4rem;
  width: 100%;
  max-width: 37.5rem;
  img {
    height: auto;
    width: 100%;
  }
  @media screen and (min-width: 400px) {
    grid-template-areas: "gallery productdetails";
  }
`;

const ThumbnailGrid = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fit, 10.2rem);
`;

const ThumbnailImage = styled.div`
  border: 1px solid ${lighten(0.75, "#333")};
  height: 10.2rem;
  margin: 0;
  width: 10.2rem;
  img {
    height: 100%;
    width: auto;
  }
  &.selected {
    border-color: #333;
  }
`;

const Gallery = ({ image, images, handleOnImageClick }) => {
  return (
    <GalleryWrapper>
      <div>
        <MainImage>
          <img src={image} alt="Product" />
        </MainImage>
      </div>
      <ThumbnailGrid>
        {images.map((imageUrl, i) => (
          <ThumbnailImage
            key={i}
            className={imageUrl === image ? "selected thumbnail" : "thumbnail"}
            onClick={() => handleOnImageClick(imageUrl)}
          >
            <img src={imageUrl} alt="Product" />
          </ThumbnailImage>
        ))}
      </ThumbnailGrid>
    </GalleryWrapper>
  );
};

export default Gallery;
