import React, { Component } from "react";
import image from "../img/logo branco.png";
import icons from "../img/icons.png";
import "./estilo.css";

class Footer extends Component {
  render() {
    return (
      <div className="rodape p-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 p-1">
              <img src={image} width="120" className=""></img>
            </div>
            <div className="col-lg-4 p-1">
              <span className=" d-flex flex-column text-light">
                <span>
                  Portal de Privacidade | Política de Privacidade © 2022 Radnet
                </span>
                <span>Telecom. Todos os direitos reservados.</span>
              </span>
            </div>

            <div className="col-lg-4 p-1">
              <img src={icons} width="140" className=""></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
