import React from 'react';
import styled from 'styled-components';

// Styled components
// const MainContainer = styled.div`
//   display: flex;
//   flex-direction : column;
//   background-color: #EBEBEB;
// `

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #EBEBEB;
`;

const TextContainer = styled.div`
  width: 650px;
  height: 367px;
  padding-top: 144px;
  padding-left: 75px;
`;

const Milk = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 80px;
  line-height: 86px;
  color: #71AA38;
`;

const DeliveryApp = styled(Milk)`
  color: #252B33;
`;

const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 30px;
  color: #252B33;
  padding-top: 30px;
  padding-bottom: 50px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BtnGetStarted = styled.button`
  background-color: #71AA38;
  padding: 11px 32px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  line-height: 26px;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #5c8c2f;
  }
`;

const BtnViewMore = styled(BtnGetStarted)`
    border: 1px solid #71AA38  ;
    color: #252B33;
    background-color: white;

    &:hover {
    background-color: #e5eae0;
    }
`;

const PhoneImg = styled.img`
  height: 735px;
  padding-right: 15px;
`;


const Hero_Section = () => {
  return (
    <>
    <Container>
      <TextContainer>
        <Milk>Milk</Milk>
        <DeliveryApp>Delivery App</DeliveryApp>
        <Text>To stay ahead of the curve, serve your customers through an On-Demand Food Delivery App.</Text>
        <BtnContainer>
          <BtnGetStarted>Get Started</BtnGetStarted>
          <BtnViewMore>View More</BtnViewMore>
        </BtnContainer>
      </TextContainer>
      <PhoneImg src='/_HeroSection/Mobile.png' />
    </Container>
    </>
    
    


      

    
    
  );
};

export default Hero_Section;
