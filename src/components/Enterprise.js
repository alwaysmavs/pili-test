import React from 'react';
import Navwhite from './public/Navwhite';
import Epfirst from './enterprise/Epfirst';
import Epsecond from './enterprise/Epsecond';
import Footer from './public/Footer';




class Enterprise extends React.Component {

  render() {
    return (
      <div>
        <Navwhite />
        <Epfirst />
        <Epsecond />
        <Footer />
      </div>
    );
  }
}

Enterprise.defaultProps = {
};

export default Enterprise;
