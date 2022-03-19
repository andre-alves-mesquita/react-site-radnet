import React, { Component } from "react";
import image from "../img/foto-cyberpunk.png";
import image2 from "../img/banner-valores.png";
import image3 from "../img/radnet-fibra.png";
import "./estilo.css";

class Banner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between p-3">
        <div className="container">
          <div className="row">
            <div className="col-6 d-none d-sm-none d-md-none d-lg-block banner">
              <img src={image} className="img-fluid"></img>
            </div>
            <div className="col-12 col-lg-6   d-flex flex-column justify-content-center align-items-center">
              <img src={image3} className="img-fluid"></img>
              <img src={image2} className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
