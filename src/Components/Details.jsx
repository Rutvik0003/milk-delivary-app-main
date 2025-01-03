import React from 'react'
import styled from 'styled-components'

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
`;

const Line = styled.div`
    width: 130px;
    height: 1px;
    background-color: #71AA38; /* Use background-color for the line */
`;

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DetailImg = styled.img`
    height: 100%;
`

const DetailTxt1 = styled.p`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 22px;
    line-height: 32px;
    color: #252B33;
    max-width: ${(props) => props.maxWidth || 'auto'};
    padding-top: 23px;
    padding-bottom: 22px;
    

`

const DetailTxt2 = styled.p`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 30px;
    color: #252B33;
    max-width: 348px;
`

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 96px;
    margin-left : 151px;
    margin-right: 151px;
    margin-bottom: 150px;
`





const Details = () => {
  return (
    <>
        <Container>
            <Heading1>LOREM IPSUM</Heading1>
            <Line />
            <Heading2>Why are we unique ?</Heading2>
            <DetailsContainer>
            
            <DetailContainer>
                <DetailImg src='/_Details/1.png' />
                <DetailTxt1 maxWidth = "200px">
                We’ve upped the game.
                </DetailTxt1>
                <DetailTxt2>
                We carry a variety of products through our unique vendors that you can’t typically get delivered.
                </DetailTxt2>
            </DetailContainer>
            
            <DetailContainer>
                <DetailImg src='/_Details/2.png' />
                <DetailTxt1 maxWidth = "350px">
                Order From our virtual mall of Local Store.
                </DetailTxt1>
                <DetailTxt2>
                Order from a large variety of local stores you like and trust for years you can’t typically get delivered.
                </DetailTxt2>
            </DetailContainer>

            <DetailContainer>
                <DetailImg src='/_Details/3.png' />
                <DetailTxt1 maxWidth = "300px">
                Easy Access to local services
                </DetailTxt1>
                <DetailTxt2>
                Easy access to local services such as dry cleaning, we can pick it up and drop it off to make your
                </DetailTxt2>
            </DetailContainer>
            </DetailsContainer>
            
        </Container>
    </>
  )
}

export default Details
