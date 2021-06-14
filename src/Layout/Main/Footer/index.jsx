import React from 'react';
import qyrc from '@qy/.qyrc.js';

const Footer = qyrc?.footer;

export default () => (
  Footer ? <Footer/> : null
);
