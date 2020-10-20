import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        
        </Head>
        <body  data-spy="scroll" data-target=".fixed-top">
          <Main />
          <NextScript />
        </body>
        <script src="/static/js/jquery.min.js"></script> 
        <script src="/static/js/popper.min.js"></script> 
        <script src="/static/js/bootstrap.min.js"></script> 
        <script src="/static/js/jquery.easing.min.js"></script> 
        <script src="/static/js/swiper.min.js"></script> 
        <script src="/static/js/jquery.magnific-popup.js"></script> 
        <script src="/static/js/validator.min.js"></script> 
        <script src="/static/js/select2.min.js"></script>
        <script src="/static/js/jquery-confirm.min.js"></script>
        <script src="/static/js/scripts.js"></script> 
      </Html>
    )
  }
}

export default MyDocument