import React from 'react';
import projectrc from '@/.projectrc.js';

const Footer = projectrc?.footer;

export default () => (
  Footer ? <Footer /> : null
);
