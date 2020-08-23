import React from "react";
import Princing from "../Pages/Pricing";

function Cards(props) {
  return (
    <div className="container">
      <div className="card-deck mb-3 text-center">
        {props.data.map((pricing, index) => {
          return (
            <div
              key={`pricing-${index}-${pricing.priceType}`}
              className="card mb-4 shadow-sm"
            >
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">{pricing.priceType}</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>{pricing.users}</li>
                  <li>{pricing.support}</li>
                  <li>{pricing.help}</li>
                  <li>{pricing.storage}</li>
                </ul>

                <a
                  href={pricing.url}
                  target="_blank"
                  className="btn btn-lg btn-block btn-primary"
                >
                  {" "}
                  {pricing.buttonInfo}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
