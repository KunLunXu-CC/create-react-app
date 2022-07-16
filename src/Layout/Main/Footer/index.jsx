import React from 'react';
import projectrc from '@klx-cra/.projectrc.js';

const Footer = projectrc?.footer;

export default () => (
  Footer ? <Footer /> : null
);
