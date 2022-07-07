import React from 'react';
import { Link } from 'react-router-dom';
import {
  Head, Navbar, LeftSide, Back, Backbar, RightSide, Center, Text, Fa, Ai, Gr,
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
        <Link to="/Map"><Gr /></Link>
        <Ai />
        <Fa />
      </RightSide>
    </Navbar>
  </Head>
);

export default Header;
