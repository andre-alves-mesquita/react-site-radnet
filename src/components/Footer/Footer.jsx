import React, { Component } from "react";
import image from "../img/logo branco.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import whatsapp from "../img/whatsapp.png";
import "./estilo.css";

class Footer extends Component {
  render() {
    return (
      <div className="rodape p-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 p-1">
              <a href="">
                <img src={image} width="120" className=""></img>
              </a>
            </div>
            <div className="col-lg-4 d-none d-sm-none d-md-none d-lg-block p-1">
              <span className=" d-flex flex-column text-light">
                <span>
                  Portal de Privacidade | Política de Privacidade © 2022 Radnet
                </span>
                <span>Telecom. Todos os direitos reservados.</span>
              </span>
            </div>

            <div className="col-lg-4 p-1">
              <a href="https://api.whatsapp.com/send?phone=556133350513">
                <img src={whatsapp} width="40" className="m-2"></img>
              </a>
              <a href="https://www.instagram.com/radnettelecom/">
                <img src={instagram} width="40" className="m-2"></img>
              </a>
              <a href="https://www.facebook.com/RadnetTelecom">
                <img src={facebook} width="40" className="m-2"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
