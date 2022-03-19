import React, { Component } from "react";
import "./estilo.css";
import { Animated } from "react-animated-css";

class Planos extends Component {
  constructor() {
    super();
    this.planos = ["START", "PLUS", "ULTRA", "MESH"];
    this.velocidade = ["60", "200", "300", "400"];
    this.valor = ["89,90", "109,90", "129,90", "199,90"];
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
                className="col-12 col-lg-2 fundo-serie d-flex flex-column p-3 bg-light rounded-3 mb-3"
              >
                <h1 className="mb-0 planos-texto">{plano}</h1>
                <h1 className="mt-0 mb-0 planos-texto fonte-velocidade">
                  {this.velocidade[index]}
                </h1>
                <h1>MEGAS</h1>
                <span className="text-danger">+ instalação grátis</span>
                <span>por apenas</span>
                <h1 className="mb-0">{this.valor[index]}</h1>
                <span>c/ fidelidade</span>
                <a href={this.links[index]}>
                  <button className="btn btn-primary mt-3">Contrate</button>
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
