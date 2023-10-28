export default function Header() {
    return(
        <header className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-6 col-xs-12">
              <nav>
                <div id="menu-toggle">
                  <div className="hamburger">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </div>
                  <div className="cross">
                    <span className="line"></span>
                    <span className="line"></span>
                  </div>
                </div>
                <ul className="main-nav">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
                <a href="#" className="menu"><img src="assets/menu.png"/></a>
              <div className="hero-text">
                <h1><span>Hi, I am</span><br/>Maria Ferrero.</h1>
                <h3>Freelance designer from Melbourne</h3>
                <a href="#" className="btn btn-lg btn-primary">Know More</a>
                <ul className="social-links">
                  <li className="label">Join me here</li>
                  <li><a href="#"><img src="assets/behance.png"/></a></li>
                  <li><a href="#"><img src="assets/dribbble.png"/></a></li>
                  <li><a href="#"><img src="assets/twitter.png"/></a></li>
                  <li><a href="#"><img src="assets/github.png"/></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}