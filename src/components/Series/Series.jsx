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
            <p className="text-light texto-games p-5">
              <h1>+SERIES</h1>
              <h1>+FILMES</h1>

              <h6>
                Assista suas séries em alta qualidade sem travamentos, com
                RADNET FIBRA você irá aproveitar a melhor experiência de
                conexão.
              </h6>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Series;
