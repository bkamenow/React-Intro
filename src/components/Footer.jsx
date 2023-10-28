export default function Footer() {
    return(
        <footer>
        <div className="container-fluid">
          <div className="row footer">
            <div className="col-md-12 text-center">
              <h1>Maria<br/><span>Ferrero</span></h1>
              <ul className="social-links">
                <li><a href="#"><img src="assets/behance.png"/></a></li>
                <li><a href="#"><img src="assets/dribbble.png"/></a></li>
                <li><a href="#"><img src="assets/twitter.png"/></a></li>
                <li><a href="#"><img src="assets/github.png"/></a></li>
              </ul>
            </div>
          </div>
          <div className="row sub-footer">
            <div className="col-md-12 text-center">
              <p>Designed by <a href="#" target="_blank">@realvjy</a> | Download <a href="http://designerdada.com/free-bootstrap-one-page-portfolio-template/">here</a></p>
            </div>
          </div>
        </div>
      </footer>
    );
}