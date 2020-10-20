import React from 'react';
import App from 'next/app';

import MainLayout from './../components/template/Main';
import LandingPage from './../components/template/LandingPage'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || LandingPage;
    return (
      <>
      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
      </>
    )
  }
  
}
export default MyApp
