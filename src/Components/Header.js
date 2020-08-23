import React from "react";

function Header(props) {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        {props.companyName}
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        {props.navBar.map((item, index) => {
          return (
            <a
              key={`item-navbar-${index}`}
              className="p-2 text-dark"
              href={item.url}
              target="_blank"
            >
              {item.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default Header;
