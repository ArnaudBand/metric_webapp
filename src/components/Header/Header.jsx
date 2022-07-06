import React from 'react';
import {
  Head, Navbar, LeftSide, Back, Backbar, RightSide, Center, Text, Fa, Ai,
} from './header.style';

const Header = () => (
  <Head>
    <Navbar>
      <LeftSide>
        <Back to="/">
          <Backbar />
          2022
        </Back>
      </LeftSide>
      <Center>
        <Text>Covid_19 Information</Text>
      </Center>
      <RightSide>
        <Ai />
        <Fa />
      </RightSide>
    </Navbar>
  </Head>
);

export default Header;
