import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { FaMicrophone } from 'react-icons/fa';
import { AiTwotoneSetting } from 'react-icons/ai';

export const Head = styled.header`
  padding: 1rem;
  background-color: #548ce8;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.div`
  padding: 0 0 0 1rem;
`;

export const Center = styled.div`
  margin: 0 1rem;
`;

export const Text = styled.h1`
  text-align: center;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const Backbar = styled(TiArrowBack)`
  font-size: 2rem;
`;

export const Back = styled(Link)`
  display: flex;
  justify-content: left;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
`;

export const Fa = styled(FaMicrophone)`
  margin: 0 0.09rem;
  font-size: 1.5rem;
`;

export const Ai = styled(AiTwotoneSetting)`
  margin: 0 0.09rem;
  font-size: 1.5rem;
`;
