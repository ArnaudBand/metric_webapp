import React from 'react';
import { End, FooterLink } from './footer.styled';

const Footer = () => (
  <End>
    &copy;
    {' '}
    <FooterLink to="https://github.com/ArnaudBand/metric_webapp">Designed by Arnaud</FooterLink>
    {' '}
  </End>
);

export default Footer;
