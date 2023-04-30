import React, { Component } from 'react';
import Footer from '../componets/footer';
import Header from '../componets/header';
import MainSingleNews from '../componets/mainSingleNews';

class SingleNews extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainSingleNews/>
        <Footer/>
      </div>
    );
  }
}

export default SingleNews;
