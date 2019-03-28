import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import Loader from "./components/Loader";
import Gallery from './components/Gallery';
import ProductDetails from './components/ProductDetails';
import ProductDescription from './components/ProductDescription';

const Header = styled.div`
  background-color: #333;
  color: #fff;
  height: 6rem;
  padding: 0 4rem;
  h1 {
    line-height: 6rem;
    margin: 0;
  }
`;

const Wrapper = styled.main`
  color: #333;
  font-size: 1.6rem;
  position: relative;
  width: 100%;
  min-height: 300px;
  background: #fff;
`;

const LoaderWrapper = styled.div`
  box-sizing: border-box;
  height: calc(30px + 8rem);
  left: 50%;
  padding: 4rem 2rem;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(24px + 4rem);
`;

const GridWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  grid-template-areas: "gallery" 
  "productdetails";
  grid-template-columns: 100%;
  margin: 0 auto;
  max-width: 1000px;
  padding: 4rem 2rem;
  @media screen and (min-width: 400px) {
    grid-template-areas: "gallery productdetails";
    grid-template-columns: 60% 1fr;
  }
`;

const DescWrapper = styled.div`
  width: 100%;
  background-color: #F0F0F0;
`;

const GridWrapperDesc = styled(GridWrapper)`
  box-sizing: border-box;
  grid-column-gap: 6rem;
  grid-template-areas: "description" 
  "bullets";
  grid-template-columns: 100%;
  margin: 0 auto;
  width: 90%;
  padding: 4rem 2rem;
  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "bullets description";
    width: 80%;
  }  
`;

const Footer = styled.footer`
  background-color: #666666;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.4rem;
  min-height: 30rem;
  padding-top: calc(30rem / 2.5);
  text-align: center;
`;

class App extends Component {
  state = {
    bullets: [],
    image: "",
    images: [],
    loading: true,
  };

  componentDidMount = () => {
    axios("https://spreetail.com/catalog/products/ddd384ae022b68d1").then(
      product =>
        this.setState({
          brand: product.data.brand,
          bullets: product.data.bullets,
          description: product.data.description,
          image: product.data.imageUrls[0],
          images: product.data.imageUrls,
          loading: false,
          mpn: product.data.mpn,
          price: product.data.listings[0].price,
          title: product.data.title,
        })
    );
  };

  handleOnImageClick = imageUrl => {
    this.setState({ image: imageUrl });
  };

  handleOnButtonClick = () => window.alert("Button Clicked");

  render() {
    const {
      brand,
      bullets,
      description,
      image,
      images,
      loading,
      mpn,
      price,
      title
    } = this.state;

    return (
      <div className="App">
        <Header>
          <h1>Header</h1>
        </Header>
        <Wrapper>
          {loading ? (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          ) : (
            <React.Fragment>
              {title ? (
                <React.Fragment>
                  <GridWrapper>
                    <Gallery 
                      image={image}
                      images={images}
                      handleOnImageClick={this.handleOnImageClick}
                    />
                    <ProductDetails
                      brand={brand}
                      mpn={mpn}
                      title={title}
                      price={price}
                      handleOnButtonClick={this.handleOnButtonClick}
                    />
                  </GridWrapper>
                  <DescWrapper>
                    <GridWrapperDesc>
                      <ProductDescription 
                        bullets={bullets}
                        description={description}
                      />
                    </GridWrapperDesc>
                  </DescWrapper>
                </React.Fragment>
              ) : (
                <div>
                  <p>Sorry, no data to show.</p>
                </div>
              )}
            </React.Fragment>
          )}
        </Wrapper>
        <Footer>
          <p>Footer</p>
        </Footer>
      </div>
    );
  }
}

export default App;
