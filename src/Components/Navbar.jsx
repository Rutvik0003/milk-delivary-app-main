import React from 'react';
import styled from 'styled-components';
import { poppinsFont } from '../styles/fonts';
import { useState } from 'react';

// Styled components
const Container = styled.div`
  margin : 32px 75px 32px 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const OptionText = styled.a`
  text-decoration: none;
  font-size: 16px;
  line-height: 26px;
  margin: 0 10px;
  ${poppinsFont}
  font-weight: 500;
  font-style: normal;
  color: ${(props) => (props.isActive ? '#71AA38' : 'black')};
  &:hover {
    color: #71AA38;
    }
    cursor: pointer;

`;

const Logo = styled.img`
  height: 35px; /* Adjust size as needed */
  cursor: pointer; /* Optional: Add cursor for interactivity */
`;

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <Container>
      <Logo src="/_Navbar/Logo.svg" alt="Company Logo" />
      <Options>
        {['Home', 'About', 'Features', 'Testimonial', 'Contact'].map((tab) => (
          <OptionText
            key={tab}
            isActive={activeTab === tab} // Set active state
            onClick={() => setActiveTab(tab)} // Update active tab on click
          >
            {tab}
          </OptionText>
        ))}
      </Options>
    </Container>
  );
};

export default Navbar;
