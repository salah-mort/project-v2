import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        {/* Footer Start */}
        <div className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="title">Useful Links</h3>
                  <ul>
                    <li>
                      <a href="#">Pellentesque</a>
                    </li>
                    <li>
                      <a href="#">Aliquam</a>
                    </li>
                    <li>
                      <a href="#">Fusce placerat</a>
                    </li>
                    <li>
                      <a href="#">Nulla hendrerit</a>
                    </li>
                    <li>
                      <a href="#">Maecenas</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="title">Quick Links</h3>
                  <ul>
                    <li>
                      <a href="#">Posuere egestas</a>
                    </li>
                    <li>
                      <a href="#">Sollicitudin</a>
                    </li>
                    <li>
                      <a href="#">Luctus non</a>
                    </li>
                    <li>
                      <a href="#">Duis tincidunt</a>
                    </li>
                    <li>
                      <a href="#">Elementum</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="title">Get in Touch</h3>
                  <div className="contact-info">
                    <p>
                      <i className="fa fa-map-marker" />
                      123 Terry Lane, New York, USA
                    </p>
                    <p>
                      <i className="fa fa-envelope" />
                      email@example.com
                    </p>
                    <p>
                      <i className="fa fa-phone" />
                      +123-456-7890
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="title">Newsletter</h3>
                  <div className="newsletter">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus sed porta dui. Class aptent taciti sociosqu ad
                      litora torquent per conubia nostra inceptos
                    </p>
                    <form>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Your email here"
                      />
                      <button className="btn">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Footer Bottom Start */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 copyright">
                <p>
                  Copyright © <a href="https://htmlcodex.com">HTML Codex</a>.
                  All Rights Reserved
                </p>
              </div>
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
              <div className="col-md-6 template-by">
                <p>
                  Template By <a href="https://htmlcodex.com">HTML Codex</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom End */}
      </>
    );
  }
}

export default Footer;
