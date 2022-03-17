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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only
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
