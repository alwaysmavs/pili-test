import React from 'react';
import Nav from './public/Nav';
import Ftfirst from './feature/Ftfirst';
import Ftsecond from './feature/Ftsecond';
import Ftthird from './feature/Ftthird';
import Footer from './public/Footer';




class Homepage extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <Ftfirst />
        <Ftsecond />
        <Ftthird />
        <Footer />
      </div>
    );
  }
}

Homepage.defaultProps = {
};

export default Homepage;
