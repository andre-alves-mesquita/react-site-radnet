import React, { Component } from "react";
import image from "../img/logo branco.png";
import whats from "../img/whatsapp-logo-1.png";
import { Button } from "reactstrap";
import "./estilo.css";

class TopBar extends Component {
  render() {
    return (
      <div className="barra-superior fixed-top p-3 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12  d-flex  justify-content-md-start justify-content-center">
              <img src={image} width="120" className="ms-2"></img>
            </div>
            <div className="col-md-6 col-sm-12  d-flex justify-content-end align-items-center ">
              <div className="me-1 ms-1">
                <img src={whats} width="20" className="ml-2"></img>
              </div>
              <div>
                <span className="mr-3 text-white ms-1 me-1">3335-0513</span>
              </div>
              <div className="ms-3 me-3">
                <Button color="primary ms-3 me-3 m-1">Contratar</Button>
                <a href="https://radnet.c.sgp.net.br/accounts/central/login">
                  <Button color="warning ms-3 me-3 m-1">
                    Central do assinante
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
