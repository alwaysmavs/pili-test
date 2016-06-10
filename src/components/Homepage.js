import React from 'react';
import Nav from './public/Nav';
import Hpfirst from './homepage/Hpfirst';
import Hpsecond from './homepage/Hpsecond';
import Hpthird from './homepage/Hpthird';
import Cutline from './public/Cutline';
import Hpfour from './homepage/Hpfour';
import Hpfive from './homepage/Hpfive';
import Footer from './public/Footer';




class Homepage extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <Hpfirst />
        <Hpsecond />
        <Hpthird />
        <Cutline />
        <Hpfour />
        <Hpfive />
        <Footer />
      </div>
    );
  }
}

Homepage.defaultProps = {
};

export default Homepage;
