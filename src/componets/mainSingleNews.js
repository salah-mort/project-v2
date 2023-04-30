import React, { Component } from 'react';

class MainSingleNews extends Component {
  render() {
    return (
      <>
      {/* Breadcrumb Start */}
      <div className="breadcrumb-wrap">
        <div className="container-fluid">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">News</a>
            </li>
            <li className="breadcrumb-item active">News details</li>
          </ul>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* Single News Start*/}
      <div className="single-news">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="sn-img">
                <img src="img/top-news-1.jpg" />
              </div>
              <div className="sn-content">
                <a className="sn-title" href="">
                  Lorem ipsum dolor sit amet
                </a>
                <a className="sn-date" href="">
                  <i className="far fa-clock" />
                  05-Feb-2020
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                  tristique dictum tincidunt. Nam rhoncus sem vitae orci blandit,
                  quis fermentum justo laoreet. Fusce vestibulum orci vitae luctus
                  tincidunt. Maecenas eros elit, scelerisque at justo eget,
                  consectetur semper turpis. Proin pulvinar lorem eu sapien
                  fermentum, sed finibus augue convallis. Aliquam ultrices porta
                  gravida. Vestibulum nec libero sit amet enim consequat facilisis.
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Cras facilisis massa eget suscipit
                  venenatis. Suspendisse et molestie diam. Vestibulum in massa
                  dapibus, blandit nibh ut, feugiat leo.
                </p>
                <p>
                  Nulla consectetur risus libero. Donec mattis tortor justo, ac
                  egestas purus condimentum in. Etiam viverra nec metus quis
                  egestas. Nulla commodo, lectus nec dictum malesuada, tortor tellus
                  consequat nisi, sit amet dictum erat tellus in libero. In
                  dignissim lectus quis elit posuere, sit amet tempor nisi iaculis.
                  Curabitur eget ante in libero laoreet finibus nec et libero. In
                  hac habitasse platea dictumst. Morbi tincidunt ex non odio auctor
                  tristique. Nulla facilisi. Maecenas ullamcorper, felis eget
                  interdum semper, mi ipsum auctor magna, ut ullamcorper leo metus
                  vitae ex. Curabitur eu tempor elit. Phasellus blandit elit
                  fringilla, ultricies ligula sed, pretium ligula. Duis condimentum
                  elementum orci, pulvinar mattis elit luctus at. Vestibulum lacinia
                  porttitor urna, eget aliquet justo porta sed. Cras pulvinar
                  euismod consectetur. Vestibulum quis nisi non erat feugiat
                  viverra.
                </p>
                <p>
                  Aliquam eleifend pharetra nunc, et finibus felis tristique nec. Ut
                  mattis nisi ante, vel varius ipsum consectetur sit amet. Donec sed
                  eros at magna sollicitudin molestie. Cras quis malesuada felis.
                  Maecenas sodales nunc sit amet lobortis iaculis. Etiam eget
                  consectetur sem, et aliquet justo. Curabitur at viverra lacus,
                  eget feugiat erat. Fusce lacinia faucibus diam ut vestibulum.
                  Vestibulum nisi sem, lacinia ullamcorper iaculis a, finibus eget
                  mauris. Vestibulum elementum quam quam, sit amet condimentum odio
                  luctus at. Aenean dictum nec nisi vitae hendrerit. Nulla facilisi.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sidebar">
                <div className="sidebar-widget">
                  <h2>
                    <i className="fas fa-align-justify" />
                    Category
                  </h2>
                  <div className="category">
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="far fa-arrow-alt-circle-right" />
                        </span>
                        <a href="">National</a>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="far fa-arrow-alt-circle-right" />
                        </span>
                        <a href="">International</a>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="far fa-arrow-alt-circle-right" />
                        </span>
                        <a href="">Economics</a>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="far fa-arrow-alt-circle-right" />
                        </span>
                        <a href="">Politics</a>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="far fa-arrow-alt-circle-right" />
                        </span>
                        <a href="">Lifestyle</a>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="far fa-arrow-alt-circle-right" />
                        </span>
                        <a href="">Technology</a>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="far fa-arrow-alt-circle-right" />
                        </span>
                        <a href="">Trades</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget">
                  <h2>
                    <i className="fas fa-align-justify" />
                    Tags
                  </h2>
                  <div className="tags">
                    <a href="">National</a>
                    <a href="">International</a>
                    <a href="">Economics</a>
                    <a href="">Politics</a>
                    <a href="">Lifestyle</a>
                    <a href="">Technology</a>
                    <a href="">Trades</a>
                    <a href="">National</a>
                    <a href="">International</a>
                    <a href="">Economics</a>
                    <a href="">Politics</a>
                    <a href="">Lifestyle</a>
                    <a href="">Technology</a>
                    <a href="">Trades</a>
                  </div>
                </div>
                <div className="sidebar-widget">
                  <h2>
                    <i className="fas fa-align-justify" />
                    Ads 1 column
                  </h2>
                  <div className="image">
                    <a href="">
                      <img src="img/adds-1.jpg" alt="Image" />
                    </a>
                  </div>
                </div>
                <div className="sidebar-widget">
                  <h2>
                    <i className="fas fa-align-justify" />
                    Ads 2 column
                  </h2>
                  <div className="image">
                    <div className="row">
                      <div className="col-sm-6">
                        <a href="">
                          <img src="img/adds-2.jpg" alt="Image" />
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <a href="">
                          <img src="img/adds-2.jpg" alt="Image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Single News End*/}
    </>
    
    );
  }
}

export default MainSingleNews;
