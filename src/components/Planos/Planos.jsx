import React, { Component } from "react";
import "./estilo.css";
import { Animated } from "react-animated-css";

class Planos extends Component {
  constructor() {
    super();
    this.planos = ["START", "PLUS", "ULTRA", "MESH"];
    this.velocidade = ["60", "350", "450", "600"];
    this.valor = ["89,90", "99,90", "119,90", "129,90"];
    this.links = [
      "https://api.whatsapp.com/send?phone=556133350513&text=Olá,%20queria%20contratar%20o%20plano%20de%2060%20mega",
      "https://api.whatsapp.com/send?phone=556133350513&text=Olá,%20queria%20contratar%20o%20plano%20de%20200%20mega",
      "https://api.whatsapp.com/send?phone=556133350513&text=Olá,%20queria%20contratar%20o%20plano%20de%20300%20mega",
      "https://api.whatsapp.com/send?phone=556133350513&text=Olá,%20queria%20contratar%20o%20plano%20de%20400%20mega",
    ];

    var nav = document.querySelector(".anime");
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
      } else {
      }
    });
  }

  render() {
    return (
      <div className="planos-div">
        <div>
          <div className="d-flex justify-content-center mb-3">
            <h1 className="text-light">PLANOS FIBRA</h1>
          </div>

          <div className="row d-flex justify-content-evenly">
            {this.planos.map((plano, index) => (
              <div
                key={plano}
                className="col-7 col-lg-2 fundo-serie d-flex flex-column p-3 bg-light rounded-3 mb-3"
              >
                <h1 className="mb-0 planos-texto">{plano}</h1>
                <h1 className="mt-0 mb-0 planos-texto fonte-velocidade">
                  {this.velocidade[index]}
                </h1>
                <h1>MEGAS</h1>
                <span className="text-danger">
                  <strong>+ instalação grátis</strong>
                </span>
                <span>por apenas</span>
                <h1 className="mb-0 valor-card">{this.valor[index]}</h1>
                <span>c/ fidelidade</span>
                <span className="condicoes-comercial mt-2">
                  <strong>*Consulte condições comercial</strong>
                </span>

                <a href={this.links[index]}>
                  <button className="btn btn-warning mt-3">Contrate</button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Planos;
