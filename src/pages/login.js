import React, { Component } from 'react';
import Footer from '../componets/footer';
import Header from '../componets/header';
import MainLogin from '../componets/mainLogin';


class Login extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainLogin/>
        <Footer/>
      </div>
    );
  }
}

export default Login;
