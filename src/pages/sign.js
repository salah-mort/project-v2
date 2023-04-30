import React, { Component } from 'react';
import Footer from '../componets/footer';
import Header from '../componets/header';
import MainSignUp from '../componets/mainSignUp';


class Sign extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainSignUp/>
        <Footer/>
      </div>
    );
  }
}

export default Sign;