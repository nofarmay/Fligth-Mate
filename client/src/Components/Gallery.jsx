// import img1 from '../img/image.png'
// import AA from '../img/AA.jpg'
// import A from '../img/B.jpg'
// import B from '../img/C.jpg'
// import C from '../img/A.jpg'
// import D from '../img/D.jpg'

// import React, { useState } from 'react'; 
import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';

function Gallery() {
    return (
        // <!-- Carousel wrapper -->
        <div
          id="carouselMultiItemExample"
          className="carousel slide carousel-dark text-center"
          data-mdb-ride="carousel"
        >
          {/* <!-- Controls --> */}
          <div className="d-flex justify-content-center mb-4">
            <button
              className="carousel-control-prev position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample"
              data-mdb-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample"
              data-mdb-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* <!-- Inner --> */}
          <div className="carousel-inner py-4">
            {/* <!-- Single item --> */}
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                        className="card-img-top"
                        alt="Waterfall"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Rainbow Mountains,China</h5>
                        <p className="card-text">
                        The spectacular color spectrum in these mountains, located in the Zhangjia Danxia National Geological Park in north-central Gansu Province, is created by layers of minerals. Several observation points in the park reveal amazing views of the colorful and undulating peaks, whose appearance is especially spectacular during sunrise and sunset.
                        </p>
                        <a href="#!" className="btn btn-primary">Book Now</a>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                        className="card-img-top"
                        alt="Sunset Over the Sea"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Santorini, Greece</h5>
                        <p className="card-text">
                        The village of Oya is famous for its white hilltop buildings and blue-domed churches. It is recommended to arrive relatively early to watch the sun set in the blue Aegean Sea. Most evenings, crowds gather in the streets and around the crumbling castle, at the highest point of the town, to watch the burst of red-orange meet the blue sea.
                        </p>
                        <a href="#!" className="btn btn-primary">Book Now</a>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                        className="card-img-top"
                        alt="Sunset over the Sea"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Amsterdam,Netherlands</h5>
                        <p className="card-text">
                        Amsterdam, the capital of the Netherlands, is one of the most popular tourist destinations in Europe. With its universities, academies, and research institutes, along with more than 40 museums, numerous theaters, and entertainment venues, Amsterdam is also the country's leading cultural center.
                        </p>
                        <a href="#!" className="btn btn-primary">Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            {/* <!-- Single item --> */}
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                        className="card-img-top"
                        alt="Fissure in Sandstone"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </p>
                        <a href="#!" className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                        className="card-img-top"
                        alt="Storm Clouds"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </p>
                        <a href="#!" className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                        className="card-img-top"
                        alt="Hot Air Balloons"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </p>
                        <a href="#!" className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            {/* <!-- Single item --> */}
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                        className="card-img-top"
                        alt="Peaks Against the Starry Sky"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </p>
                        <a href="#!" className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                        className="card-img-top"
                        alt="Bridge Over Water"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </p>
                        <a href="#!" className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                        className="card-img-top"
                        alt="Purbeck Heritage Coast"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </p>
                        <a href="#!" className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Inner --> */}
        </div>
        // <!-- Carousel wrapper -->
    );
}

export default Gallery

