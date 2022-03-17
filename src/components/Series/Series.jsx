import React, { Component } from "react";
import image from "../img/series-netflix.jpg";
import "./estilo.css";

class Series extends Component {
  render() {
    return (
      <div className="fundo-serie d-flex p-3">
        <div className="row">
          <div className="col-lg-8 col-ms-12">
            <img src={image} className="img-fluid"></img>
          </div>
          <div className="col-lg-4 col-ms-12">
            <p className=" texto-serie text-light p-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Series;
