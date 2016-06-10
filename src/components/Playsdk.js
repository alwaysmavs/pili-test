import React from 'react';
import Navwhite from './public/Navwhite';
import Plfirst from  './playsdk/Plfirst';
import Plsecond from './playsdk/Plsecond';
import Footer from './public/Footer';




class Playsdk extends React.Component {

  render() {
    return (
      <div>
        <Navwhite />
        <Plfirst />
        <Plsecond />
        <Footer />
      </div>
    );
  }
}

Playsdk.defaultProps = {
};

export default Playsdk;