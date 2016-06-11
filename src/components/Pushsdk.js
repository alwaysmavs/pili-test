import React from 'react';
import Navwhite from './public/Navwhite';
import Psfirst from  './pushsdk/Psfirst';
import Pssecond from './pushsdk/Pssecond';
import Ps3to6 from './pushsdk/Ps3to6';
import Psseven from './pushsdk/Psseven';
import Pseight from './pushsdk/Pseight';
import Footer from './public/Footer';



class Pushsdk extends React.Component {

  render() {
    return (
      <div>
        <Navwhite />
        <Psfirst />
        <Pssecond />
        <Ps3to6 />
        <Psseven />
        <Pseight />
        <Footer />
      </div>
    );
  }
}

Pushsdk.defaultProps = {
};

export default Pushsdk;