import React from 'react';
import Navwhite from './public/Navwhite';
import Abfirst from './about7/Abfirst';
import Absecond from './about7/Absecond';
import Footer from './public/Footer';




class About7 extends React.Component {

  render() {
    return (
      <div>
        <Navwhite />
        <Abfirst />
        <Absecond />
        <Footer />
      </div>
    );
  }
}

About7.defaultProps = {
};

export default About7;
