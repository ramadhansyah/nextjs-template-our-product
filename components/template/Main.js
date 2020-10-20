import Header from './path/Header';
import Footer from './path/Footer';
import Nav from './path/Nav';
import Head from 'next/head'
const MainLayout = ({ children }) => {

  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        <meta name="description" content="Create a stylish landing page for your business startup and get leads for the offered services with this free HTML landing page template."/>
        <meta name="author" content="Inovatik"/>
        <meta property="og:site_name" content="" />
        <meta property="og:site" content="" /> 
        <meta property="og:title" content=""/> 
        <meta property="og:description" content="" /> 
        <meta property="og:image" content="" /> 
        <meta property="og:url" content="" />
        <meta property="og:type" content="article" />
        <title>Klik Campus - Sistem Informasi Akademik Campus Terintegrasi</title>
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,700i&amp;subset=latin-ext" rel="stylesheet"/>
        <link href="/static/css/bootstrap.css" rel="stylesheet"/>
        <link href="/static/css/fontawesome-all.css" rel="stylesheet"/>
        <link href="/static/css/swiper.css" rel="stylesheet"/>
        <link href="/static/css/magnific-popup.css" rel="stylesheet"/>
        <link href="/static/css/select2.min.css" rel="stylesheet"/>
        <link href="/static/css/select2-bootstrap.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="/static/css/jquery-confirm.min.css"/>
        <link href="/static/css/styles.css" rel="stylesheet"/>
        <link rel="icon" href="/static/images/logo.ico"/> 
      </Head>
      <div className="spinner-wrapper">
          <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
          </div>
      </div>
      <div className="main-container">
        <Nav/>
        {children}

      </div>
      <Footer/>
    </>
  )
};

export default MainLayout;
