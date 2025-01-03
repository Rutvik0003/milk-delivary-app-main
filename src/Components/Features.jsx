import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EBEBEB;
`;

const Heading1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
    line-height: 30px;
    letter-spacing: 20%;
    color: #71AA38;
`;

const Heading2 = styled(Heading1)`
    font-weight  :700 ;
    font-size : 48px;
    line-height: 58px;
    letter-spacing: 0%;
    color: #252B33;
    margin-bottom: 70px;
`;

const Line = styled.div`
    width: 130px;
    height: 1px;
    background-color: #71AA38; /* Use background-color for the line */
`;

const MainFeaturesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MobileImg = styled.img`
    height: 100%;
`;

const TextMainContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
`

const TextContainer1 = styled.div`
    display: flex;
    flex-direction: column;
`

const TextHeading1 = styled.h1`
    text-align: ${(props)=>props.textAlign};
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 22px;
    line-height: 32px;
    color: #252B33;
`

const TextContent1 = styled.p`
    text-align: ${(props=>props.textAlign)};
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 30px;
    color: #252B33;
    max-width: 343px;
`


const Features = () => {
  return (
    <Container>
        <Heading1>FEATURES</Heading1>
        <Line/>
        <Heading2>Awesome Features</Heading2>
        <MainFeaturesContainer>
            <TextMainContainer1 style={{ height: "400px" }}>    
                <TextContainer1>
                    <TextHeading1 textAlign = 'right'>Near By Stores</TextHeading1>
                    <TextContent1 textAlign = 'right'>Discover Local Stores based on your GPS location</TextContent1>
                </TextContainer1>

                <TextContainer1>
                    <TextHeading1 textAlign = 'right'>Near By Stores</TextHeading1>
                    <TextContent1 textAlign = 'right'>Discover Local Stores based on your GPS location</TextContent1>
                </TextContainer1>

                <TextContainer1>
                    <TextHeading1 textAlign = 'right'>Near By Stores</TextHeading1>
                    <TextContent1 textAlign = 'right'>Discover Local Stores based on your GPS location</TextContent1>
                </TextContainer1>
            </TextMainContainer1>
            <MobileImg src='/_Features/Mobile 1.png'/>
            <TextMainContainer1 style={{ height: "400px" }}>
                <TextContainer1>
                    <TextHeading1 textAlign = 'left'>Near By Stores</TextHeading1>
                    <TextContent1 textAlign = 'left'>Discover Local Stores based on your GPS location</TextContent1>
                </TextContainer1>

                <TextContainer1>
                    <TextHeading1 textAlign = 'left'>Near By Stores</TextHeading1>
                    <TextContent1 textAlign = 'left'>Discover Local Stores based on your GPS location</TextContent1>
                </TextContainer1>

                <TextContainer1>
                    <TextHeading1 textAlign = 'left'>Near By Stores</TextHeading1>
                    <TextContent1 textAlign = 'left'>Discover Local Stores based on your GPS location</TextContent1>
                </TextContainer1>
            </TextMainContainer1>
        </MainFeaturesContainer>
    </Container>
  )
}

export default Features
