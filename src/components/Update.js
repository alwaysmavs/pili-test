import React from 'react';
import Navwhite from './public/Navwhite';
import Upfirst from './update/Upfirst';
import Upsecond from './update/Upsecond';
import Upthird from './update/Upthird';
import Footer from './public/Footer';



class Pushsdk extends React.Component {

  render() {
    return (
      <div>
        <Navwhite />
        <Upfirst />
        <Upsecond />
        <Upthird />
        <Footer />
      </div>
    );
  }
}

Pushsdk.defaultProps = {
};

export default Pushsdk;