import React, { Component } from 'react';
import Footer from '../componets/footer';
import Header from '../componets/header';
import MainCategories from '../componets/mainCategories';

class Categories extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainCategories/>
        <Footer/>
      </div>
    );
  }
}

export default Categories;
