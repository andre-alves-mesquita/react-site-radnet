import React, { Component } from "react";
import image from "../img/Epic-Games-Store.jpg";
import "./estilo.css";

class Games extends Component {
  render() {
    return (
      <div className="fundo-games d-flex p-3">
        <div className="row">
          <div className="col-lg-4 col-ms-12">
            <p className="text-light texto-games p-5">
              <h1>+GAMES</h1>
              <h1>+RADNET FIBRA</h1>
              <h6>
                Jogue com qualidade, sem lag, com RADNET FIBRA, tendo baixa
                latência para games, fazendo grande diferença nos seus
                resultados.
              </h6>
            </p>
          </div>
          <div className="col-lg-8 col-ms-12 d-flex justify-content-center">
            <img src={image} className="img-fluid"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
