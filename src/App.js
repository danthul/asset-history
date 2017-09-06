// @flow

import React from 'react';
// import { Grid, Navbar, Jumbotron, Button } from "react-bootstrap";
import BreadcrumbList from './BreadcrumbList';
import preload from './data.json';

const App = () => {
  return <BreadcrumbList events={preload} perPage={10} />;
};

export default App;
