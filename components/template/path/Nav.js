
import Link from 'next/link';
const Nav = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">

      <a className="navbar-brand logo-image" href="index.html"><img src="/static/images/logo.png" alt="alternative"/></a>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-awesome fas fa-bars"></span>
          <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
             
                <a href="" className="nav-link page-scroll" >Home <span className="sr-only">(current)</span></a>
            
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#modul">Modul & Featur</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#services">Service</a>
            </li>

            <li className="nav-item">
              <a className="nav-link page-scroll" href="#request">Request</a>
            </li>
            <li className="nav-item">
              <Link href="/blog/halaman-1">
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#contact">Contact</a>
            </li>
          </ul>
          <span className="nav-item social-icons">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x facebook"></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x twitter"></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
          </span>
        </div>
    </nav> 
  </>
    
);

export default Nav;
