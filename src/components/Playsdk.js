import React from 'react';
import Navwhite from './public/Navwhite';
import Plfirst from  './playsdk/Plfirst';
import Plsecond from './playsdk/Plsecond';
import Pl3to5 from './playsdk/Pl3to5';
import Plsix from './playsdk/Plsix';
import Plseven from './playsdk/Plseven';
import Footer from './public/Footer';



class Playsdk extends React.Component {

  render() {
    return (
      <div>
        <Navwhite />
        <Plfirst />
        <Plsecond />
        <Pl3to5 />
        <Plsix />
        <Plseven />
        <Footer />
      </div>
    );
  }
}

Playsdk.defaultProps = {
};

export default Playsdk;