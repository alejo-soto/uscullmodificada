import React from "react";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Cards from "../Components/Cards";
import { dataPricing } from "../Components/utils/mocks/dataPrincing";
import Footer from "../Components/Footer";

function Princing() {
  return (
    <>
      <Header
        companyName="USCULL"
        navBar={[
          {
            name: "Facebook",
            url: "http://Facebook.com"
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/uscull_2020/"
          },
          {
            name: "Gmail",
            url: "http://github.com"
          },
          {
            name: "Github",
            url: "http://github.com"
          }
        ]}
        //buttonName="Registrate"
      />
      <Content
        title="USCULL"
        description="Lo que el nombre nos quiere dejar es que la salida sería el lugar en el
         que se encontraría el cliente, y la llegada la tienda con las mejores características
          y necesidades fundamentales para el usuario, de esta manera nació el nombre de nuestra empresa."
      />
      <Cards data={dataPricing} />
      <Footer />
    </>
  );
}

export default Princing;
