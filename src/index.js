import React from 'react';
import reactDom from 'react-dom';
import Layout from './Layout';

import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <Router>
    <Layout/>
  </Router>
);

reactDom.render(<App/>, document.getElementById('root'));
